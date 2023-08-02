import React from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { colors } from 'theme/colors';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import Space from 'components/atoms/space/Space';
import { useDrawerSidebarContext } from 'components/organisms/sidebar/drawerSidebar/viewModel/context';

import { DRAWER_MAX_WINDOW_WIDTH } from 'constants/layout';

import { getRoute } from 'utils/routes/getRoute';
import { RouteItem } from 'utils/interfaces/routes';
import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

const LeftSize: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  const { open, close, isOpen } = useDrawerSidebarContext();

  return (
    <Space $gap={10} style={{ width: 'fit-content', position: 'relative', zIndex: 1001 }} $alignItems="center">
      {
        windowWidth < DRAWER_MAX_WINDOW_WIDTH && (
          <Hamburger
            color={colors.COLOR_PRIMARY}
            onToggle={(toggled) => (toggled ? open() : close())}
            toggled={isOpen}
          />
        )
      }
      <Link to={getRoute(RouteItem.PROFILE)} onClick={close}>
        <img src={logo} alt="logo" draggable={false} />
      </Link>
    </Space>
  );
};

export default LeftSize;
