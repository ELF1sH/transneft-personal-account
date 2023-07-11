import { RouteItem } from 'utils/interfaces/routes';

export const getRouteItemByRoute = (route: string) => {
  const items = route.split('/');

  return items.at(-1) ?? RouteItem.BASE;
};
