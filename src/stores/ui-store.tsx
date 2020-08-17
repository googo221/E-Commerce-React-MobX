import { types, Instance } from 'mobx-state-tree';

const UIStore = types
  .model('UIStore', {
    show: types.boolean,
  })
  .actions((self) => {
    const openModal = () => {
      self.show = true;
    };

    const closeModal = () => {
      self.show = false;
    };

    return { openModal, closeModal };
  });

export default UIStore;
export type IUIStore = Instance<typeof UIStore>;
