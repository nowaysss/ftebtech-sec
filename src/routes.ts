interface Route {
  path: string;
  name: string;
  title: string;
}

export const routes: Record<string, Route> = {
  home: {
    path: '/',
    name: 'Resolution',
    title: 'Resolution - Home'
  },
  itServices: {
    path: '/it-services',
    name: 'IT Services',
    title: 'IT Services - Resolution'
  }
};

// Helper function to get route path by key
export const getRoutePath = (routeKey: string): string => {
  return routes[routeKey]?.path || '/';
};

// Helper function to get route name by key
export const getRouteName = (routeKey: string): string => {
  return routes[routeKey]?.name || 'Resolution';
};

export default routes;
