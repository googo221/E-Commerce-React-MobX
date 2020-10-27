import { getEnv, Instance, types } from 'mobx-state-tree';

import ApiService from '../apis/api-service';
import { ApiPosition } from '../types/api';

const Position = types.model('Position', {
  id: types.identifierNumber,
  position: types.string,
});

export const Positions = types
  .model('Positions', {
    desiredPositions: types.map(Position),
  })
  .views((self) => ({
    get apiService(): ApiService {
      return getEnv(self).apiService;
    },
    get positionsListing() {
      return [...self.desiredPositions.values()];
    },
  }))
  .actions((self) => {
    const { apiService, desiredPositions } = self;

    const getPositions = () => {
      const response = apiService.getPositions();
      response.forEach((position: ApiPosition) =>
        desiredPositions.put(position)
      );
    };

    return { getPositions };
  });

export default Position;
export type IPosition = Instance<typeof Position>;
