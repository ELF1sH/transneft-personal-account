import { getRouteItemLabel } from 'utils/routes/getRouteLabels';
import { RouteItem } from 'utils/interfaces/routes';

export const getHeaderTitle = (pathname: string): string => {
  const targetRouteItem = pathname.split('/').at(-1);

  return getRouteItemLabel(targetRouteItem || RouteItem.BASE);
};
