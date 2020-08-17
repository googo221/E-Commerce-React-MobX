import { types, Instance } from 'mobx-state-tree';
import { SelectedPhone } from '../types/common';
import { Phones } from './phone';

const Order = types.model('Order', {
  id: types.identifierNumber,
  firstName: types.string,
  lastName: types.string,
  address: types.string,
  city: types.string,
  state: types.string,
  zipCode: types.number,
  country: types.string,
  cardName: types.string,
  cardNumber: types.number,
  expiryDate: types.string,
  cvv: types.number,
  phones: Phones,
  cart: types.array(types.frozen<SelectedPhone>()),
});

export const Orders = types
  .model('Orders', {
    orders: types.map(Order),
  })
  .views((self) => ({
    get orderInfo() {
      const { orders } = self;

      return [...orders.values()];
    },
  }));

export default Order;
export type IOrder = Instance<typeof Order>;
