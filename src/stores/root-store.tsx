import { types, Instance } from 'mobx-state-tree';
import DataStore from './data-store';
import UIStore from './ui-store';
import ApiService from '../apis/api-service';

const apiService = new ApiService();
const RootStore = types.model('RootStore', {
  dataStore: types.optional(DataStore, {
    phones: {},
    brands: {},
    cpus: {},
    gpus: {},
    orders: {},
    filters: {
      phoneSearchQuery: '',
      priceFilter: { minPrice: undefined, maxPrice: undefined },
    },
  }),
  uiStore: types.optional(UIStore, {
    show: false,
  }),
});

export default RootStore;
export const rootStore = RootStore.create({}, { apiService: apiService });
export type IRootStore = Instance<typeof RootStore>;
