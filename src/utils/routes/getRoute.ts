import { routePaths } from 'constants/routes';

import { RouteItem } from 'utils/interfaces/routes';

export const getRoute = (route: string) => {
  if (!Object.values(RouteItem).includes(route as RouteItem)) {
    return '';
  }

  if (route === RouteItem.BASE) return '/';

  const routeItem = route as RouteItem;

  const routePath = [...routePaths[routeItem], routeItem];

  return `/${routePath.join('/')}`;
};
