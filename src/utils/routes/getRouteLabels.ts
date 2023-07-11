import { routeItemsLabels, routeSectionsLabels } from 'constants/routes/routeLabels';

import { RouteItem, RouteSection } from 'utils/interfaces/routes';

export const getRouteItemLabel = (routeItem: string) => {
  if (Object.values(RouteItem).includes(routeItem as RouteItem)) {
    return routeItemsLabels[routeItem as RouteItem];
  }

  if (Object.values(RouteSection).includes(routeItem as RouteSection)) {
    return routeSectionsLabels[routeItem as RouteSection];
  }

  return 'Страница не найдена';
};
