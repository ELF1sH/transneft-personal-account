import { APP_HEADER_EXPAND_WINDOW_WIDTH, APP_HEADER_EXPANDED_HEIGHT, DRAWER_MAX_WINDOW_WIDTH } from 'constants/layout';

import React from 'react';
import { Button, Typography } from 'antd';
import { Spin as Hamburger } from 'hamburger-react';
import { colors } from 'theme/colors';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import { useDrawerSidebarContext } from 'components/organisms/sidebar/drawerSidebar/viewModel/context';
import { Avatar, AvatarWrapper, PageHeaderSpace } from 'components/organisms/appHeader/styled';
import Space from 'components/atoms/space/Space';
import { NoPictureDummy } from 'components/atoms/noPictureDummy/NoPictureDummy';

import { useUserContext } from 'modules/providers/userProvider/context';

import { getRoute } from 'utils/routes/getRoute';
import { useAppHeaderHeight } from 'utils/hooks/layout/useAppHeaderHeight';
import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';
import { RouteItem } from 'utils/interfaces/routes';

const AppHeader: React.FC = () => {
  const { profile } = useUserContext();

  const { windowWidth } = useWindowWidth();
  const { appHeaderHeight } = useAppHeaderHeight();
  const { open, close, isOpen } = useDrawerSidebarContext();

  const direction = windowWidth < APP_HEADER_EXPAND_WINDOW_WIDTH ? 'vertical' : 'horizontal';

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

      <Link to={getRoute(RouteItem.PROFILE)} style={{ flexShrink: 0, textDecoration: 'none', marginRight: '12px' }}>
        <Space $gap={8} $fitContent>
          <AvatarWrapper>
            {
                profile?.avatar
                  ? <Avatar src={profile.avatar} />
                  : <NoPictureDummy fontSize="20px" />
              }
          </AvatarWrapper>
          <Typography.Text>{profile?.fullName}</Typography.Text>
        </Space>
      </Link>

      <Button>Выйти</Button>
    </PageHeaderSpace>
  );
};

export default AppHeader;
