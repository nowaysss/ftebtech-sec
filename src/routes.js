export const routes = {
  home: {
    path: '/',
    name: 'Home',
    title: 'Home'
  },
  company: {
    path: '/company',
    name: 'Company',
    title: 'About Our Company'
  },
  servicess: {
    path: '/servicess',
    name: 'Services',
    title: 'Services'
  },
  elements: {
    path: '/elements',
    name: 'Elements',
    title: 'Elements'
  },
  caseStudies: {
    path: '/case-studies',
    name: 'Case Studies',
    title: 'Case Studies'
  },
  blog: {
    path: '/blog',
    name: 'Blog',
    title: 'Blog'
  },
  // Individual service pages
  azure: {
    path: '/services/azure',
    name: 'Azure Services',
    title: 'Microsoft Azure Services'
  },
  microsoft365: {
    path: '/services/microsoft365',
    name: 'Microsoft 365',
    title: 'Microsoft 365 Solutions'
  },
  dynamics365: {
    path: '/services/dynamics365',
    name: 'Dynamics 365',
    title: 'Dynamics 365 Implementation'
  },
  development: {
    path: '/services/development',
    name: 'Development',
    title: 'Custom Development Services'
  },
  infrastructure: {
    path: '/services/infrastructure',
    name: 'Infrastructure',
    title: 'IT Infrastructure Services'
  },
  security: {
    path: '/services/security',
    name: 'Security',
    title: 'Cybersecurity Solutions'
  }
};

// Helper function to get route path by key
export const getRoutePath = (routeKey) => {
  return routes[routeKey]?.path || '/';
};

// Helper function to get route name by key
export const getRouteName = (routeKey) => {
  return routes[routeKey]?.name || 'Resolution';
};

export default routes;