import React from 'react';

import { PageHeaderSpace } from 'components/organisms/appHeader/styled';

import { APP_HEADER_EXPAND_WINDOW_WIDTH, APP_HEADER_EXPANDED_HEIGHT } from 'constants/layout';

import { useAppHeaderHeight } from 'utils/hooks/layout/useAppHeaderHeight';
import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const AppHeader: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  const { appHeaderHeight } = useAppHeaderHeight();

  const direction = windowWidth < APP_HEADER_EXPAND_WINDOW_WIDTH ? 'vertical' : 'horizontal';

  return (
    <PageHeaderSpace
      $justifyContent={appHeaderHeight === APP_HEADER_EXPANDED_HEIGHT ? 'center' : 'space-between'}
      $alignItems={appHeaderHeight === APP_HEADER_EXPANDED_HEIGHT ? 'start' : 'center'}
      $direction={direction}
      $padding="0 16px"
      $height={appHeaderHeight}
    >
      <LeftSide />
      <RightSide />
    </PageHeaderSpace>
  );
};

export default AppHeader;
