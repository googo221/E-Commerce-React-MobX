export class ApiService {
  // constructor() {}

  getManagementTypes = () => {
    return [{ id: 1, name: 'Permanent contracts' }];
  };

  getClientTypes = () => {
    return [
      { id: 1, name: 'Large groups' },
      { id: 2, name: 'Individuals' },
      { id: 3, name: 'Small groups' },
    ];
  };

  getProductTypes = () => {
    return [
      { id: 1, name: 'Saas' },
      { id: 2, name: 'Service' },
      { id: 3, name: 'Management' },
      { id: 4, name: 'Sales' },
    ];
  };

  getRegions = () => {
    return [
      { id: 1, region: 'Paris, France' },
      { id: 2, region: 'Barcelona, Spain' },
      { id: 3, region: 'Dortmund, Germany' },
      { id: 4, region: 'Rome, Italy' },
      { id: 5, region: 'London, United Kingdom' },
    ];
  };

  getLanguages = () => {
    return [
      { id: 1, language: 'French' },
      { id: 2, language: 'English' },
      { id: 3, language: 'German' },
      { id: 4, language: 'Italian' },
      { id: 5, language: 'Spanish' },
    ];
  };

  getPositions = () => {
    return [
      { id: 1, position: 'Account Executive' },
      { id: 2, position: 'Account Manager' },
      { id: 3, position: 'BizDev' },
      { id: 4, position: 'Head of Sales' },
      { id: 5, position: 'Costumer Success' },
    ];
  };

  getExperiences = () => {
    return [
      {
        id: 1,
        jobTitle: 'Account executive',
        companyName: '@ CoorpAcademy',
        description:
          'Strong expertise in supporting large accounts (onboarding and monitoring) and in upsell/ cross sell.',
      },
      {
        id: 2,
        jobTitle: 'Account manager',
        companyName: '@ Potel et Chabot',
        description:
          'Missions of Account Manager and Account Executive, she manages around twenty accounts',
      },
      {
        id: 3,
        jobTitle: 'BizDev',
        companyName: '@ Uber',
        description:
          'Sets the objectives for his teams and increases their skills, manages the planning, supervises the results',
      },
      {
        id: 4,
        jobTitle: 'BizDev',
        companyName: '@ Papernest',
        description:
          'Strong expertise in supporting large accounts (onboarding and monitoring) and in upsell/ cross sell.',
      },
      {
        id: 5,
        jobTitle: 'Head of Sales',
        companyName: '@ IBM',
        description:
          'Sets the objectives for his teams and increases their skills, manages the planning, supervises the results',
      },
      {
        id: 6,
        jobTitle: 'BizDev',
        companyName: '@ IBM',
        description:
          'Sets the objectives for his teams and increases their skills, manages the planning, supervises the results',
      },
      {
        id: 7,
        jobTitle: 'Costumer success',
        companyName: '@ Papernest',
        description:
          'Strong expertise in supporting large accounts (onboarding and monitoring) and in upsell/ cross sell.',
      },
      {
        id: 8,
        jobTitle: 'Account manager',
        companyName: '@ Discngine',
        description:
          'Missions of Account Manager and Account Executive, she manages around twenty accounts',
      },
      {
        id: 9,
        jobTitle: 'Account executive',
        companyName: '@ Discngine',
        description:
          'Strong expertise in supporting large accounts (onboarding and monitoring) and in upsell/ cross sell.',
      },
      {
        id: 10,
        jobTitle: 'Account manager',
        companyName: '@ Discngine',
        description:
          'Missions of Account Manager and Account Executive, she manages around twenty accounts',
      },
      {
        id: 11,
        jobTitle: 'Head of sales',
        companyName: '@ Discngine',
        description:
          'Sets the objectives for his teams and increases their skills, manages the planning, supervises the results',
      },
    ];
  };

  getCandidates = () => {
    return [
      {
        id: 1,
        contactEmail: 'ninat@gmail.com',
        firstName: 'Nina',
        lastName: 'Traverse',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/ninat/',
        fixSalary: 45.0,
        keyExperiences: ['Potel et Chabot', 'Uber', 'Discngine'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [1, 2, 3],
        desiredPositions: [1, 2, 3],
        spokenLanguages: [1, 2],
        hiringLocation: 1,
        productTypeExps: [1, 2],
        clientTypeExps: [1, 2],
        managementTypeExps: 1,
      },
      {
        id: 2,
        contactEmail: 'adrienm@gmail.com',
        firstName: 'Adrien',
        lastName: 'Masson',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/adrienm/',
        fixSalary: 45.0,
        keyExperiences: ['Papernest', 'IBM'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [4, 5],
        desiredPositions: [3, 4],
        spokenLanguages: [1],
        hiringLocation: 4,
        productTypeExps: [2, 3],
        clientTypeExps: [2],
        managementTypeExps: 1,
      },
      {
        id: 3,
        contactEmail: 'julliettem@gmail.com',
        firstName: 'Julliete',
        lastName: 'Messeant',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/jullietem/',
        fixSalary: 45.0,
        keyExperiences: ['IBM'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [6, 7],
        desiredPositions: [3, 5],
        spokenLanguages: [1, 2, 3],
        hiringLocation: 3,
        productTypeExps: [3, 4],
        clientTypeExps: [1, 2, 3],
        managementTypeExps: 1,
      },
      {
        id: 4,
        contactEmail: 'alexandrep@gmail.com',
        firstName: 'Alexandre',
        lastName: 'Perret',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/alexandrep/',
        fixSalary: 45.0,
        keyExperiences: ['Discngine'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [8],
        desiredPositions: [2],
        spokenLanguages: [1, 4, 5],
        hiringLocation: 2,
        productTypeExps: [4, 1],
        clientTypeExps: [1],
        managementTypeExps: 1,
      },
      {
        id: 5,
        contactEmail: 'alexanderp@gmail.com',
        firstName: 'Alexander',
        lastName: 'Perret',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/alexanderp/',
        fixSalary: 45.0,
        keyExperiences: ['Discngine'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [9, 10, 11],
        desiredPositions: [1, 2, 5],
        spokenLanguages: [1, 2, 5],
        hiringLocation: 5,
        productTypeExps: [2, 3],
        clientTypeExps: [1, 3],
        managementTypeExps: 1,
      },
      {
        id: 6,
        contactEmail: 'ninat@gmail.com',
        firstName: 'Nina',
        lastName: 'Traverse',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/ninat/',
        fixSalary: 45.0,
        keyExperiences: ['Potel et Chabot', 'Uber', 'Discngine'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [1, 2, 3],
        desiredPositions: [1, 2, 3],
        spokenLanguages: [1, 2],
        hiringLocation: 1,
        productTypeExps: [1, 2],
        clientTypeExps: [1, 2],
        managementTypeExps: 1,
      },
      {
        id: 7,
        contactEmail: 'adrienm@gmail.com',
        firstName: 'Adrien',
        lastName: 'Masson',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/adrienm/',
        fixSalary: 45.0,
        keyExperiences: ['Papernest', 'IBM'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [4, 5],
        desiredPositions: [3, 4],
        spokenLanguages: [1],
        hiringLocation: 4,
        productTypeExps: [2, 3],
        clientTypeExps: [2],
        managementTypeExps: 1,
      },
      {
        id: 8,
        contactEmail: 'julliettem@gmail.com',
        firstName: 'Julliete',
        lastName: 'Messeant',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/jullietem/',
        fixSalary: 45.0,
        keyExperiences: ['IBM'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [6, 7],
        desiredPositions: [3, 5],
        spokenLanguages: [1, 2, 3],
        hiringLocation: 3,
        productTypeExps: [3, 4],
        clientTypeExps: [1, 2, 3],
        managementTypeExps: 1,
      },
      {
        id: 9,
        contactEmail: 'alexandrep@gmail.com',
        firstName: 'Alexandre',
        lastName: 'Perret',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/alexandrep/',
        fixSalary: 45.0,
        keyExperiences: ['Discngine'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [8],
        desiredPositions: [2],
        spokenLanguages: [1, 4, 5],
        hiringLocation: 2,
        productTypeExps: [4, 1],
        clientTypeExps: [1],
        managementTypeExps: 1,
      },
      {
        id: 10,
        contactEmail: 'alexanderp@gmail.com',
        firstName: 'Alexander',
        lastName: 'Perret',
        profilePicture: '',
        nbYearExp: 2.5,
        linkedinUrl: 'linkedin.com/in/alexanderp/',
        fixSalary: 45.0,
        keyExperiences: ['Discngine'],
        accomplishment:
          'She exceeded her objectives by 50% to finish as top performer for her team with $1.5M in turnover generated on her 15 clients in 2019. Not bad for the youngest of the team, right?',
        desire:
          'Nina is looking for a startup/scaleup that has already validated a first product market fit. She would like to retain management and contribute to the commercial start. Is open to any sector',
        passion:
          'Passionate about sailing, but do not worry, she will not go to the Vendee Globe if she signs with you ;)',
        ourThoughts:
          'A safe bet! Versatile, passionate about his job and not afraid of challenges, he is the perfect person if you want to structure your company.',
        experiences: [9, 10, 11],
        desiredPositions: [1, 2, 5],
        spokenLanguages: [1, 2, 5],
        hiringLocation: 5,
        productTypeExps: [2, 3],
        clientTypeExps: [1, 3],
        managementTypeExps: 1,
      },
    ];
  };
}

export default ApiService;
