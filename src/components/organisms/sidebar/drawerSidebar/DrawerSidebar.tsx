import React from 'react';
import { Drawer } from 'antd';
import { colors } from 'theme/colors';

import Sidebar from 'components/organisms/sidebar/Sidebar';
import {
  useDrawerSidebarContext,
} from 'components/organisms/sidebar/drawerSidebar/viewModel/context';

import { APP_HEADER_HEIGHT } from 'constants/layout';

const DrawerSidebar: React.FC = () => {
  const { isOpen, close } = useDrawerSidebarContext();

  return (
    <Drawer
      placement="left"
      onClose={close}
      open={isOpen}
      headerStyle={{ display: 'none' }}
      bodyStyle={{ padding: '0', background: colors.COLOR_BG_PRIMARY }}
      width={300}
    >
      <div style={{ paddingTop: `${APP_HEADER_HEIGHT}px` }}>
        <div style={{
          height: `${APP_HEADER_HEIGHT}px`, zIndex: 500, background: colors.COLOR_BG_PRIMARY, position: 'fixed', top: 0, left: 0, width: `${300}px`,
        }}
        />
        <Sidebar insideDrawer />
      </div>
    </Drawer>
  );
};

export default DrawerSidebar;
