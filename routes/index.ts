function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_PAGE = {
  whyEsgBay:{
    main:'/product',
    ourMission: '/product#ourmission',
    focus:'/product#focus',
    convenience: '/product#business',
    whyReport:'/product#whyreport',
    features: '/product#features',
  },
  ourSolution:{
    main:'/esg-reporting',
    smes:'/esg-reporting#smes',
    coporations:'/esg-reporting#corporations',
    investors:'/esg-reporting#investors',
    questionnaire: '/esg-reporting#questionnaire',
    pricing: '/esg-reporting#pricing',
  },
  resources: {
    main:'/resources',
    sustainabilityReporting: '/resources#whatissustainability',
    whyStakeholders:'/resources#whystakeholders',
    howToReport:'/resources#howtoreport',
    whatIsEsg:'/resources#whatisesg',
    whatIsCSR:'/resources#whatisCSR',
  },
  about: '/about-us',
  contact: '/contact',
  register: {
    main:'/register',
    verify:'/register/verify'
  },
  login:{
    main:'/login',
    forgotPassword: '/forgot-password'
  },
  termsConditions: '/terms-conditions',
  privacyPolicy:'/privacy-policy',

};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    banking: path(ROOTS_DASHBOARD, '/banking'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  myPerformance: {
    root: path(ROOTS_DASHBOARD, '/my-performance'),
    newReport: path(ROOTS_DASHBOARD, '/my-performance/new-report'),
  },
  myUsers:{
    root: path(ROOTS_DASHBOARD, '/my-users'),
    invite: path(ROOTS_DASHBOARD, '/my-users/invite')
  }
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
