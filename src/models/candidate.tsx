import { getEnv, getParent, hasParent, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import ClientType from './client-type';
import Position from './position';
import Experience from './experiences';
import Region from './region';
import ManagementType from './management-type';
import ProductType from './product-type';
import Language from './language';
import { ApiCandidate } from '../types/api';

const Candidate = types
  .model('Candidate', {
    id: types.identifierNumber,
    contactEmail: types.string,
    firstName: types.string,
    lastName: types.string,
    profilePicture: types.string,
    nbYearExp: types.number,
    linkedinUrl: types.string,
    fixSalary: types.number,
    accomplishment: types.string,
    desire: types.string,
    passion: types.string,
    ourThoughts: types.string,
    keyExperiences: types.array(types.string),
    experiences: types.array(types.reference(Experience)),
    desiredPositions: types.array(types.reference(Position)),
    spokenLanguages: types.array(types.reference(Language)),
    hiringLocation: types.reference(Region),
    productTypeExps: types.array(types.reference(ProductType)),
    clientTypeExps: types.array(types.reference(ClientType)),
    managementTypeExps: types.reference(ManagementType),
  })
  .views((self) => ({
    get fullName() {
      return self.firstName + ' ' + self.lastName;
    },
    get keyExperienceLength() {
      return self.keyExperiences.length;
    },
  }));

export const Candidates = types
  .model('Candidates', {
    candidates: types.map(Candidate),
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
    get candidatesListing() {
      return [...self.candidates.values()];
    },
  }))
  .actions((self) => {
    const { candidates, apiService, dataStore } = self;
    const {
      experiences,
      desiredPositions,
      spokenLanguages,
      hiringLocation,
      productTypeExps,
      clientTypeExps,
      managementTypeExps,
    } = dataStore!;

    const getCandidates = () => {
      experiences.getExperiences();
      desiredPositions.getPositions();
      spokenLanguages.getLanguages();
      hiringLocation.getRegions();
      productTypeExps.getProductTypes();
      clientTypeExps.getClientTypes();
      managementTypeExps.getManagementTypes();
      const response = apiService.getCandidates();
      response.forEach((candidate: ApiCandidate) => candidates.put(candidate));
    };

    return { getCandidates };
  });

export default Candidate;
export type ICandidate = Instance<typeof Candidate>;
