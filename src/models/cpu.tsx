import { types, getEnv, Instance } from 'mobx-state-tree';
import ApiService from '../apis/api-service';
import { ApiCpu } from '../types/api';

const Cpu = types.model('Cpu', {
  id: types.identifierNumber,
  name: types.string,
  speed: types.number,
});

export const Cpus = types
  .model('Cpus', {
    cpus: types.map(Cpu),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get cpusListing() {
      const { cpus } = self;

      return [...cpus.values()];
    },
  }))
  .actions((self) => {
    const { cpus, apiService } = self;

    const getCpus = () => {
      const response = apiService.getCpus();
      response.forEach((cpu: ApiCpu) => cpus.put(cpu));
    };

    return { getCpus };
  });

export default Cpu;
export type ICpu = Instance<typeof Cpu>;
