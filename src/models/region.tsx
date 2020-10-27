import { getEnv, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiRegion } from '../types/api';

const Region = types.model('Region', {
  id: types.identifierNumber,
  region: types.string,
});

export const Regions = types
  .model('Regions', {
    hiringLocation: types.map(Region),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get regionsListing() {
      return [...self.hiringLocation.values()];
    },
  }))
  .actions((self) => {
    const { apiService, hiringLocation } = self;

    const getRegions = () => {
      const response = apiService.getRegions();
      response.forEach((region: ApiRegion) => hiringLocation.put(region));
    };

    return { getRegions };
  });

export default Region;
export type IRegion = Instance<typeof Region>;
