import { IBrand } from '../models/brand';
import { IGpu } from '../models/gpu';
import { ICpu } from '../models/cpu';

export type OrderDraft = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  cardName: string;
  cardNumber: number;
  expiryDate: string;
  cvv: number;
};

export type SelectedPhone = {
  id: number;
  name: string;
  price: number;
  desc: string;
  brand: IBrand;
  gpu: IGpu;
  cpu: ICpu;
  quantity: number;
};
