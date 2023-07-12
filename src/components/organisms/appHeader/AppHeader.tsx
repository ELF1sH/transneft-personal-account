import { APP_HEADER_EXPANDED_HEIGHT, DRAWER_MAX_WINDOW_WIDTH } from 'constants/layout';

import React from 'react';
import { Typography } from 'antd';
import { Spin as Hamburger } from 'hamburger-react';
import { colors } from 'theme/colors';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import { useDrawerSidebarViewModel } from 'components/organisms/sidebar/drawerSidebar/viewModel/context';
import { Avatar, AvatarWrapper, PageHeaderSpace } from 'components/organisms/appHeader/styled';
import Space from 'components/atoms/space/Space';

import { getRoute } from 'utils/routes/getRoute';
import { useAppHeaderHeight } from 'utils/hooks/useAppHeaderHeight';
import { useWindowWidth } from 'utils/hooks/useWindowWidth';
import { RouteItem } from 'utils/interfaces/routes';

const AppHeader: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  const { appHeaderHeight } = useAppHeaderHeight();
  const { open, close, isOpen } = useDrawerSidebarViewModel();

  const direction = windowWidth < 500 ? 'vertical' : 'horizontal';

  return (
    <PageHeaderSpace
      $justifyContent={appHeaderHeight === APP_HEADER_EXPANDED_HEIGHT ? 'center' : 'space-between'}
      $alignItems="center"
      $direction={direction}
      $padding="0 16px"
      $height={appHeaderHeight}
    >
      <Space $gap={10} $alignItems="center" style={{ zIndex: 1001, position: 'relative' }}>
        {
          windowWidth < DRAWER_MAX_WINDOW_WIDTH && (
            <Hamburger
              color={colors.COLOR_PRIMARY}
              onToggle={(toggled) => (toggled ? open() : close())}
              toggled={isOpen}
            />
          )
        }
        <Link to={getRoute(RouteItem.PROFILE)}>
          <img src={logo} alt="logo" draggable={false} />
        </Link>
      </Space>
      <Space $gap={8} $fitContent style={{ flexShrink: 0 }}>
        <AvatarWrapper>
          <Avatar src="https://fakeimg.pl/24x24" />
        </AvatarWrapper>
        <Typography.Text>Шевцов Олег Петрович</Typography.Text>
      </Space>
    </PageHeaderSpace>
  );
};

export default observer(AppHeader);
