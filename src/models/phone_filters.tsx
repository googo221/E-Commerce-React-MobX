import { types, Instance, hasParent, getParent } from 'mobx-state-tree';
import Brand, { IBrand } from './brand';

type PriceFilter = {
  minPrice?: number;
  maxPrice?: number;
};

const PhoneFilters = types
  .model('PhoneFilters', {
    phoneSearchQuery: types.string,
    brandsFilter: types.array(types.reference(Brand)),
    priceFilter: types.frozen<PriceFilter>(),
  })
  .views((self) => ({
    isBrandChecked(brand: IBrand) {
      const { brandsFilter } = self;

      return brandsFilter.includes(brand);
    },
    get dataStore() {
      if (hasParent(self)) {
        return getParent(self);
      } else {
        return undefined;
      }
    },
  }))
  .actions((self) => {
    const { priceFilter, brandsFilter, isBrandChecked } = self;

    const setNameFilter = (name: string) => {
      self.phoneSearchQuery = name;
    };
    const setMinPrice = (price?: number) => {
      self.priceFilter = { ...priceFilter, minPrice: price };
    };
    const setMaxPrice = (price?: number) => {
      self.priceFilter = { ...priceFilter, maxPrice: price };
    };
    const toggleBrandFilter = (brand: IBrand) => {
      const index = brandsFilter.findIndex(
        (brandID) => brandID.id === brand.id
      );

      if (isBrandChecked(brand)) {
        return brandsFilter.splice(index, 1);
      } else {
        brandsFilter.push(brand);
      }
    };

    return { setNameFilter, toggleBrandFilter, setMinPrice, setMaxPrice };
  });

export default PhoneFilters;
export type IPhoneFilters = Instance<typeof PhoneFilters>;
