import React, { useMemo } from 'react';

import { DrawerSidebarVmContext } from 'components/organisms/sidebar/drawerSidebar/viewModel/context';
import { DrawerSidebarViewModel } from 'components/organisms/sidebar/drawerSidebar/viewModel';

import { IChildren } from 'utils/interfaces/helpers';

const DrawerSidebarProvider: React.FC<IChildren> = ({ children }) => {
  const vm = useMemo<DrawerSidebarViewModel>(
    () => new DrawerSidebarViewModel(),
    [],
  );

  return (
    <DrawerSidebarVmContext.Provider value={vm}>
      {children}
    </DrawerSidebarVmContext.Provider>
  );
};

export default DrawerSidebarProvider;
