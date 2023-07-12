import { APP_HEADER_EXPANDED_HEIGHT, APP_HEADER_HEIGHT } from 'constants/layout';

import { useWindowWidth } from 'utils/hooks/useWindowWidth';

export const useAppHeaderHeight = () => {
  const { windowWidth } = useWindowWidth();

  const appHeaderHeight = windowWidth < 500 ? APP_HEADER_EXPANDED_HEIGHT : APP_HEADER_HEIGHT;

  return { appHeaderHeight };
};
