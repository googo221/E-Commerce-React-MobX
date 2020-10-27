import { getEnv, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiProductType } from '../types/api';

const ProductType = types.model('ProductType', {
  id: types.identifierNumber,
  name: types.string,
});

export const ProductTypes = types
  .model('ProductType', {
    productTypeExps: types.map(ProductType),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get productTypesListing() {
      return [...self.productTypeExps.values()];
    },
  }))
  .actions((self) => {
    const { apiService, productTypeExps } = self;

    const getProductTypes = () => {
      const response = apiService.getProductTypes();
      response.forEach((productType: ApiProductType) =>
        productTypeExps.put(productType)
      );
    };

    return { getProductTypes };
  });

export default ProductType;
export type IProductType = Instance<typeof ProductType>;
