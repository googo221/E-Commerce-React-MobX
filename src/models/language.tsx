import { getEnv, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiLanguage } from '../types/api';

const Language = types.model('Language', {
  id: types.identifierNumber,
  language: types.string,
});

export const Languages = types
  .model('Languages', {
    spokenLanguages: types.map(Language),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get languagesListing() {
      return [...self.spokenLanguages.values()];
    },
  }))
  .actions((self) => {
    const { apiService, spokenLanguages } = self;

    const getLanguages = () => {
      const response = apiService.getLanguages();
      response.forEach((language: ApiLanguage) =>
        spokenLanguages.put(language)
      );
    };

    return { getLanguages };
  });

export default Language;
export type ILanguage = Instance<typeof Language>;
