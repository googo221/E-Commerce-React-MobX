// import { AxiosInstance } from 'axios';

export class ApiService {
  constructor() {}

  getGpus = () => {
    return [
      { id: 1, name: 'Mali-G57 (6-core)' },
      { id: 2, name: 'Mali-G77 MP11' },
      { id: 3, name: 'Apple GPU (4-core graphics)' },
      { id: 4, name: 'PowerVR GE8320' },
      { id: 5, name: 'Adreno 616' },
      { id: 6, name: 'Mali-G57 MC5' },
    ];
  };

  getCpus = () => {
    return [
      { id: 1, name: 'Octa-core (Cortex-A76 Cortex-A55)', speed: 16.23 },
      {
        id: 2,
        name: 'Octa-core (Mongoose M5 & Cortex-A76 & Cortex-A55)',
        speed: 18.42,
      },
      { id: 3, name: 'Hexa-core (Lightning & Thunder)', speed: 13.15 },
      {
        id: 4,
        name: 'Octa-core (Kryo 475 Prime & Kryo 475 Gold & Kryo 475 Silver)',
        speed: 14.85,
      },
      { id: 5, name: 'Octa-core (Cortex-A76 & Cortex-A55', speed: 18.4 },
      {
        id: 6,
        name: 'Octa-core (Kryo 485 Prime & Kryo 485 Gold & Kryo 485 Silver)',
        speed: 17.55,
      },
    ];
  };

  getBrands = () => {
    return [
      { id: 1, name: 'Huawei' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Apple' },
      { id: 4, name: 'Nokia' },
      { id: 5, name: 'Xiaomi' },
      { id: 6, name: 'Lenovo' },
    ];
  };

  getPhones = () => {
    return [
      {
        id: 1,
        name: 'Huawei P40 lite 5G',
        price: 400,
        desc: 'Available. Released 2020, May 28',
        brand: 1,
        gpu: 1,
        cpu: 1,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Huawei P30 Pro New Edition',
        price: 730,
        desc: 'Available. Released 2020, June 01',
        brand: 1,
        gpu: 1,
        cpu: 1,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Huawei P40 Pro+',
        price: 1800,
        desc: 'Available. Released 2020, June 06',
        brand: 1,
        gpu: 1,
        cpu: 1,
        quantity: 1,
      },
      {
        id: 4,
        name: 'Samsung Galaxy S20 Ultra 5G',
        price: 1050,
        desc: 'Available. Released 2020, March 06',
        brand: 2,
        gpu: 2,
        cpu: 2,
        quantity: 1,
      },
      {
        id: 5,
        name: 'Samsung Galaxy S20+ 5G',
        price: 800,
        desc: 'Available. Released 2020, March 06',
        brand: 2,
        gpu: 2,
        cpu: 2,
        quantity: 1,
      },
      {
        id: 6,
        name: 'Samsung Galaxy A71',
        price: 700,
        desc: 'Coming soon. Exp. release 2020, July 16',
        brand: 2,
        gpu: 2,
        cpu: 2,
        quantity: 1,
      },
      {
        id: 7,
        name: 'Apple iPhone 11 Pro Max',
        price: 1100,
        desc: '	Available. Released 2019, September 20',
        brand: 3,
        gpu: 3,
        cpu: 3,
        quantity: 1,
      },
      {
        id: 8,
        name: 'Apple iPhone 11 Pro',
        price: 1000,
        desc: 'Available. Released 2019, September 20',
        brand: 3,
        gpu: 3,
        cpu: 3,
        quantity: 1,
      },
      {
        id: 9,
        name: 'Apple iPhone 11',
        price: 800,
        desc: 'Available. Released 2019, September 20',
        brand: 3,
        gpu: 3,
        cpu: 3,
        quantity: 1,
      },
      {
        id: 10,
        name: 'Nokia C5 Endi',
        price: 200,
        desc: 'Available. Released 2020, June 05',
        brand: 4,
        gpu: 4,
        cpu: 4,
        quantity: 1,
      },
      {
        id: 11,
        name: 'Nokia 8.3 5G',
        price: 600,
        desc: 'Coming soon. Exp. release 2020, July',
        brand: 4,
        gpu: 4,
        cpu: 4,
        quantity: 1,
      },
      {
        id: 12,
        name: 'Nokia 7.2',
        price: 600,
        desc: 'Available. Released 2019, September 23',
        brand: 4,
        gpu: 4,
        cpu: 4,
        quantity: 1,
      },
      {
        id: 13,
        name: 'Xiaomi Redmi 10X 5G',
        price: 300,
        desc: '	Available. Released 2020, June 01',
        brand: 5,
        gpu: 5,
        cpu: 5,
        quantity: 1,
      },
      {
        id: 14,
        name: 'Xiaomi Redmi 10X Pro 5G',
        price: 400,
        desc: 'Available. Released 2020, June 06',
        brand: 5,
        gpu: 5,
        cpu: 5,
        quantity: 1,
      },
      {
        id: 15,
        name: 'Xiaomi Mi Note 10 Lite',
        price: 350,
        desc: 'Available. Released 2020, May 09',
        brand: 5,
        gpu: 5,
        cpu: 5,
        quantity: 1,
      },
      {
        id: 16,
        name: 'Lenovo Z5s',
        price: 220,
        desc: 'Available. Released 2018, December 24',
        brand: 6,
        gpu: 6,
        cpu: 6,
        quantity: 1,
      },
      {
        id: 17,
        name: 'Lenovo K10 Plus',
        price: 350,
        desc: 'Available. Released 2019, September 30',
        brand: 6,
        gpu: 6,
        cpu: 6,
        quantity: 1,
      },
      {
        id: 18,
        name: 'Lenovo Z6 Pro 5G',
        price: 400,
        desc: 'Available. Released 2019, November 15',
        brand: 6,
        gpu: 6,
        cpu: 6,
        quantity: 1,
      },
    ];
  };
}

export default ApiService;
