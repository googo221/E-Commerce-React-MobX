export type ApiPhone = {
  id: number;
  name: string;
  price: number;
  desc: string;
  brand: number;
  gpu: number;
  cpu: number;
  quantity: number;
};

export type ApiBrand = {
  id: number;
  name: string;
};

export type ApiGpu = {
  id: number;
  name: string;
};

export type ApiCpu = {
  id: number;
  name: string;
  speed: number;
};
