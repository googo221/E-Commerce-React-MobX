import { types, Instance, getEnv } from 'mobx-state-tree';
import { Phones } from '../models/phone';
import { Brands } from '../models/brand';
import ApiService from '../apis/api-service';
import { ApiPhone, ApiBrand, ApiCpu, ApiGpu } from '../types/api';
import PhoneFilters from '../models/phone_filters';
import { Cpus } from '../models/cpu';
import { Gpus } from '../models/gpu';
import { Orders } from '../models/order';
import { SelectedPhone } from '../types/common';

const DataStore = types
  .model('DataStore', {
    phones: Phones,
    brands: Brands,
    cpus: Cpus,
    gpus: Gpus,
    filters: PhoneFilters,
    orders: Orders,
    cart: types.array(types.frozen<SelectedPhone>()),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get priceListing() {
      const {
        phones: { phonesListing },
      } = self;

      return phonesListing.map((phone) => phone.price);
    },
    get filteredPhoneList() {
      const {
        phones: { phonesListing },
        filters: { phoneSearchQuery, brandsFilter, priceFilter },
      } = self;

      return phonesListing
        .filter((phone) => {
          return (
            phone.name.toLowerCase().includes(phoneSearchQuery.toLowerCase()) ||
            phoneSearchQuery === ''
          );
        })
        .filter(
          (phone) =>
            brandsFilter.includes(phone.brand) || brandsFilter.length === 0
        )
        .filter(
          (phone) =>
            (priceFilter.minPrice && phone.price >= priceFilter.minPrice) ||
            priceFilter.minPrice === undefined
        )
        .filter(
          (phone) =>
            (priceFilter.maxPrice && phone.price <= priceFilter.maxPrice) ||
            priceFilter.maxPrice === undefined
        );
    },
    phoneIndex(phoneId: number) {
      const { cart } = self;

      return cart.findIndex((existingPhone) => existingPhone.id === phoneId);
    },
    phone(phoneId: number) {
      const {
        phones: { phones },
      } = self;

      return phones.get(phoneId.toString())!;
    },
    get cartPhoneListing() {
      const { cart } = self;

      return [...cart.values()];
    },
    get cartSum() {
      const { cart } = self;

      return cart.reduce((sum, phone) => sum + phone.price, 0);
    },
    get cartQuantity() {
      const { cart } = self;

      return cart.reduce((sum, phone) => sum + phone.quantity, 0);
    },
  }))
  .views((self) => ({
    get minPrice() {
      const { priceListing } = self;

      return Math.min(...priceListing);
    },
    get maxPrice() {
      const { priceListing } = self;

      return Math.max(...priceListing);
    },
  }))
  .actions((self) => {
    const {
      brands: { brands },
      phones: { phones },
      gpus: { gpus },
      cpus: { cpus },
      apiService,
      phoneIndex,
      phone,
      cart,
    } = self;

    const increment = (phoneId: number) => {
      const existingPhone = cart.find((p) => p.id === phoneId)!;
      const cartPhone = { ...existingPhone };

      cartPhone.quantity++;
      cartPhone.price! += phone(phoneId).price;
      cart[phoneIndex(phoneId)] = cartPhone;
    };

    const decrement = (phoneId: number) => {
      const existingPhone = cart.find((p) => p.id === phoneId)!;
      const cartPhone = { ...existingPhone };

      if (cartPhone.quantity === 1) {
        removeFromCart(phoneId);
      } else {
        cartPhone.quantity--;
        cartPhone.price! -= phone(phoneId).price;
        cart[phoneIndex(phoneId)] = cartPhone;
      }
    };

    const addToCart = (phoneId: number) => {
      if (phoneIndex(phoneId) > -1) {
        increment(phoneId);
      } else {
        cart.push({ ...self.phone(phoneId) });
      }
    };

    const removeFromCart = (phoneId: number) => {
      if (self.phone(phoneId)) {
        return cart.splice(phoneIndex(phoneId), 1);
      }
    };

    const clearCart = () => {
      return cart.clear();
    };

    const getBrands = () => {
      const response = apiService.getBrands();
      response.forEach((brand: ApiBrand) => brands.put(brand));
    };

    const getGpus = () => {
      const response = apiService.getGpus();
      response.forEach((gpu: ApiGpu) => gpus.put(gpu));
    };

    const getCpus = () => {
      const response = apiService.getCpus();
      response.forEach((cpu: ApiCpu) => cpus.put(cpu));
    };

    const getPhones = () => {
      getBrands();
      const response = apiService.getPhones();
      response.forEach((phone: ApiPhone) => phones.put(phone));
    };
    return {
      getPhones,
      getBrands,
      getCpus,
      getGpus,
      increment,
      decrement,
      addToCart,
      removeFromCart,
      clearCart,
    };
  });

export default DataStore;
export type IDataStore = Instance<typeof DataStore>;
