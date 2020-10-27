import { getEnv, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiClientType } from '../types/api';

const ClientType = types.model('ClientType', {
  id: types.identifierNumber,
  name: types.string,
});

export const ClientTypes = types
  .model('CleintTypes', {
    clientTypeExps: types.map(ClientType),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get clientTypesListing() {
      return [...self.clientTypeExps.values()];
    },
  }))
  .actions((self) => {
    const { apiService, clientTypeExps } = self;

    const getClientTypes = () => {
      const response = apiService.getClientTypes();
      response.forEach((clientType: ApiClientType) =>
        clientTypeExps.put(clientType)
      );
    };

    return { getClientTypes };
  });

export default ClientType;
export type IClientType = Instance<typeof ClientType>;
