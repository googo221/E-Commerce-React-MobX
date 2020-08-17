import { types, getEnv, Instance } from 'mobx-state-tree';
import ApiService from '../apis/api-service';
import { ApiGpu } from '../types/api';

const Gpu = types.model('Gpu', {
  id: types.identifierNumber,
  name: types.string,
});

export const Gpus = types
  .model('Gpus', {
    gpus: types.map(Gpu),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get gpusListing() {
      const { gpus } = self;

      return [...gpus.values()];
    },
  }))
  .actions((self) => {
    const { apiService, gpus } = self;

    const getGpus = () => {
      const response = apiService.getGpus();
      response.forEach((gpu: ApiGpu) => gpus.put(gpu));
    };

    return { getGpus };
  });

export default Gpu;
export type IGpu = Instance<typeof Gpu>;
