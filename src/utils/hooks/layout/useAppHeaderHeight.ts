import { APP_HEADER_EXPAND_WINDOW_WIDTH, APP_HEADER_EXPANDED_HEIGHT, APP_HEADER_HEIGHT } from 'constants/layout';

import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

export const useAppHeaderHeight = () => {
  const { windowWidth } = useWindowWidth();

  const appHeaderHeight = windowWidth < APP_HEADER_EXPAND_WINDOW_WIDTH
    ? APP_HEADER_EXPANDED_HEIGHT
    : APP_HEADER_HEIGHT;

  return { appHeaderHeight };
};
