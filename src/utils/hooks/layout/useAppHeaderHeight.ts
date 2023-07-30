import { APP_HEADER_EXPANDED_HEIGHT, APP_HEADER_HEIGHT } from 'constants/layout';

import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

export const useAppHeaderHeight = () => {
  const { windowWidth } = useWindowWidth();

  const appHeaderHeight = windowWidth < 700 ? APP_HEADER_EXPANDED_HEIGHT : APP_HEADER_HEIGHT;

  return { appHeaderHeight };
};
