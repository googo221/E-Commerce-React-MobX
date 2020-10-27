import { types, Instance, getEnv } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { Candidates } from '../models/candidate';
import { ClientTypes } from '../models/client-type';
import { Positions } from '../models/position';
import { Experiences } from '../models/experiences';
import { Regions } from '../models/region';
import { ManagementTypes } from '../models/management-type';
import { ProductTypes } from '../models/product-type';
import { Languages } from '../models/language';
import {
  ApiCandidate,
  ApiClientType,
  ApiExperience,
  ApiLanguage,
  ApiManagementType,
  ApiPosition,
  ApiProductType,
  ApiRegion,
} from '../types/api';

const DataStore = types
  .model('DataStore', {
    candidates: Candidates,
    experiences: Experiences,
    desiredPositions: Positions,
    spokenLanguages: Languages,
    hiringLocation: Regions,
    productTypeExps: ProductTypes,
    clientTypeExps: ClientTypes,
    managementTypeExps: ManagementTypes,
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
  }))
  .actions((self) => {
    const {
      apiService,
      candidates: { candidates },
      experiences: { experiences },
      spokenLanguages: { spokenLanguages },
      hiringLocation: { hiringLocation },
      desiredPositions: { desiredPositions },
      clientTypeExps: { clientTypeExps },
      productTypeExps: { productTypeExps },
      managementTypeExps: { managementTypeExps },
    } = self;

    const getManagementTypes = () => {
      const response = apiService.getManagementTypes();
      response.forEach((managementType: ApiManagementType) =>
        managementTypeExps.put(managementType)
      );
    };

    const getProductTypes = () => {
      const response = apiService.getProductTypes();
      response.forEach((productType: ApiProductType) =>
        productTypeExps.put(productType)
      );
    };

    const getClientTypes = () => {
      const response = apiService.getClientTypes();
      response.forEach((clientType: ApiClientType) =>
        clientTypeExps.put(clientType)
      );
    };

    const getPositions = () => {
      const response = apiService.getPositions();
      response.forEach((position: ApiPosition) =>
        desiredPositions.put(position)
      );
    };

    const getRegions = () => {
      const response = apiService.getRegions();
      response.forEach((region: ApiRegion) => hiringLocation.put(region));
    };

    const getLanguages = () => {
      const response = apiService.getLanguages();
      response.forEach((language: ApiLanguage) =>
        spokenLanguages.put(language)
      );
    };

    const getExperiences = () => {
      const response = apiService.getExperiences();
      response.forEach((experience: ApiExperience) =>
        experiences.put(experience)
      );
    };

    const getCandidates = () => {
      const response = apiService.getCandidates();
      response.forEach((candidate: ApiCandidate) => candidates.put(candidate));
    };

    return {
      getCandidates,
      getExperiences,
      getLanguages,
      getRegions,
      getPositions,
      getClientTypes,
      getProductTypes,
      getManagementTypes,
    };
  });

export default DataStore;
export type IDataStore = Instance<typeof DataStore>;
