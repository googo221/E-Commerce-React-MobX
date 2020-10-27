import { types, getEnv, Instance } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiExperience } from '../types/api';

const Experience = types.model('Experience', {
  id: types.identifierNumber,
  jobTitle: types.string,
  companyName: types.string,
  description: types.string,
});

export const Experiences = types
  .model('Experiences', {
    experiences: types.map(Experience),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get experiencesListing() {
      return [...self.experiences.values()];
    },
  }))
  .actions((self) => {
    const { apiService, experiences } = self;

    const getExperiences = () => {
      const response = apiService.getExperiences();
      response.forEach((experience: ApiExperience) =>
        experiences.put(experience)
      );
    };

    return { getExperiences };
  });

export default Experience;
export type IExperience = Instance<typeof Experience>;
