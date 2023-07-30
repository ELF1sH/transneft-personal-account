import { BreadcrumbItem } from 'components/molecules/breadcrumb/types';

import { getRouteItemLabel } from 'utils/routes/getRouteLabels';
import { getRoute } from 'utils/routes/getRoute';

export const getBreadcrumbsItems = (pathname: string): BreadcrumbItem[] => {
  const items = pathname.split('/').filter((item) => !!item);

  return items.map((item) => ({ text: getRouteItemLabel(item), to: getRoute(item) }));
};
