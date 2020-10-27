export type ApiCandidate = {
  id: number;
  contactEmail: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  nbYearExp: number;
  linkedinUrl: string;
  fixSalary: number;
  keyExperiences: string[];
  accomplishment: string;
  desire: string;
  passion: string;
  ourThoughts: string;
  experiences: number[];
  desiredPositions: number[];
  spokenLanguages: number[];
  hiringLocation: number;
  productTypeExps: number[];
  clientTypeExps: number[];
  managementTypeExps: number;
};

export type ApiKeyExperience = {
  id: number;
  name: string;
};

export type ApiExperience = {
  id: number;
  jobTitle: string;
  companyName: string;
  description: string;
};

export type ApiPosition = {
  id: number;
  position: string;
};

export type ApiLanguage = {
  id: number;
  language: string;
};

export type ApiRegion = {
  id: number;
  region: string;
};

export type ApiProductType = {
  id: number;
  name: string;
};

export type ApiClientType = {
  id: number;
  name: string;
};

export type ApiManagementType = {
  id: number;
  name: string;
};
