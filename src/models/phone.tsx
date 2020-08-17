import { types, getEnv, Instance, getParent, hasParent } from 'mobx-state-tree';
import ApiService from '../apis/api-service';
import { ApiPhone } from '../types/api';
import Brand from './brand';
import Gpu from './gpu';
import Cpu from './cpu';

const Phone = types
  .model('Phone', {
    id: types.identifierNumber,
    name: types.string,
    price: types.number,
    desc: types.string,
    quantity: types.number,
    brand: types.reference(Brand),
    gpu: types.reference(Gpu),
    cpu: types.reference(Cpu),
  })
  .actions((self) => {
    const addExistingPhoneInCart = () => {
      self.quantity++;
      self.price += self.price;
    };

    return { addExistingPhoneInCart };
  });

export const Phones = types
  .model('Phones', {
    phones: types.map(Phone),
  })
  .views((self) => ({
    get dataStore() {
      if (hasParent(self)) {
        return getParent(self);
      } else {
        return undefined;
      }
    },
  }))
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get phonesListing() {
      const { phones } = self;

      return [...phones.values()];
    },
  }))
  .actions((self) => {
    const { phones, dataStore, apiService } = self;
    const { brands, cpus, gpus } = dataStore!;

    const getPhones = () => {
      brands.getBrands();
      cpus.getCpus();
      gpus.getGpus();
      const response = apiService.getPhones();
      response.forEach((phone: ApiPhone) => phones.put(phone));
    };

    return { getPhones };
  });

export default Phone;
export type IPhone = Instance<typeof Phone>;
