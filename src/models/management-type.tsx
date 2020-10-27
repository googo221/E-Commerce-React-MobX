import { getEnv, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiManagementType } from '../types/api';

const ManagementType = types.model('ManagementType', {
  id: types.identifierNumber,
  name: types.string,
});

export const ManagementTypes = types
  .model('ManagementTypes', {
    managementTypeExps: types.map(ManagementType),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get managementTypesListing() {
      return [...self.managementTypeExps.values()];
    },
  }))
  .actions((self) => {
    const { apiService, managementTypeExps } = self;

    const getManagementTypes = () => {
      const response = apiService.getManagementTypes();
      response.forEach((managementType: ApiManagementType) =>
        managementTypeExps.put(managementType)
      );
    };

    return { getManagementTypes };
  });

export default ManagementType;
export type IManagementType = Instance<typeof ManagementType>;
