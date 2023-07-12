import { APP_HEADER_HEIGHT } from 'constants/layout';

import React from 'react';
import { Drawer } from 'antd';
import { observer } from 'mobx-react-lite';
import { colors } from 'theme/colors';

import Sidebar from 'components/organisms/sidebar/Sidebar';
import { useDrawerSidebarViewModel } from 'components/organisms/sidebar/drawerSidebar/viewModel/context';

const DrawerSidebar: React.FC = () => {
  const { isOpen, close } = useDrawerSidebarViewModel();

  return (
    <Drawer
      placement="left"
      onClose={close}
      open={isOpen}
      headerStyle={{ display: 'none' }}
      bodyStyle={{ padding: '0', background: colors.COLOR_BG_PRIMARY }}
    >
      <div style={{ paddingTop: `${APP_HEADER_HEIGHT}px` }}>
        <Sidebar insideDrawer />
      </div>
    </Drawer>
  );
};

export default observer(DrawerSidebar);
