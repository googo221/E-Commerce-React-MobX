import { types, getEnv, Instance } from 'mobx-state-tree';
import ApiService from '../apis/api-service';
import { ApiBrand } from '../types/api';

const Brand = types.model('Brand', {
  id: types.identifierNumber,
  name: types.string,
});

export const Brands = types
  .model('Brands', {
    brands: types.map(Brand),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get brandsListing() {
      const { brands } = self;

      return [...brands.values()];
    },
  }))
  .actions((self) => {
    const { apiService, brands } = self;

    const getBrands = () => {
      const response = apiService.getBrands();
      response.forEach((brand: ApiBrand) => brands.put(brand));
    };

    return { getBrands };
  });

export default Brand;
export type IBrand = Instance<typeof Brand>;
