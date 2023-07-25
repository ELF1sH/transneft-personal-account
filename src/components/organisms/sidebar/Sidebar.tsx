import { DRAWER_MAX_WINDOW_WIDTH } from 'constants/layout';

import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';

import {
  useDrawerSidebarContext,
} from 'components/organisms/sidebar/drawerSidebar/viewModel/context';
import { items } from 'components/organisms/sidebar/items';

import { useAppHeaderHeight } from 'utils/hooks/layout/useAppHeaderHeight';
import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';
import { getRouteItemByRoute } from 'utils/routes/getRouteItemByRoute';

interface SidebarProps {
  insideDrawer?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ insideDrawer = false }) => {
  const { pathname } = useLocation();
  const { close } = useDrawerSidebarContext();

  const selectedRouteItem = getRouteItemByRoute(pathname);

  const { windowWidth } = useWindowWidth();
  const { appHeaderHeight } = useAppHeaderHeight();

  if (windowWidth < DRAWER_MAX_WINDOW_WIDTH && !insideDrawer) return null;

  return (
    <Sider width={insideDrawer ? '100%' : 220} style={{ height: '100%' }}>
      <Menu
        mode="inline"
        items={items}
        selectedKeys={[selectedRouteItem]}
        style={{ minHeight: `calc(100vh - ${appHeaderHeight}}px)`, zIndex: 2 }}
        onSelect={() => close()}
      />
    </Sider>
  );
};

export default Sidebar;
