import { types, Instance } from 'mobx-state-tree';

const UIStore = types.model('UIStore', {});

export default UIStore;
export type IUIStore = Instance<typeof UIStore>;
