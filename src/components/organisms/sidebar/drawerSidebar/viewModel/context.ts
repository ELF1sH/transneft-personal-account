import { createContext, useContext } from 'react';

import { DrawerSidebarViewModel } from 'components/organisms/sidebar/drawerSidebar/viewModel';

export const DrawerSidebarVmContext = createContext<DrawerSidebarViewModel | undefined>(
  undefined,
);

export const useDrawerSidebarViewModel = () => {
  const vm = useContext(DrawerSidebarVmContext);

  if (!vm) throw new Error();

  return vm;
};
