import React, { useMemo, useState } from 'react';

import {
  DrawerSidebarContext,
  IDrawerSidebarContext,
} from 'components/organisms/sidebar/drawerSidebar/viewModel/context';

import { IChildren } from 'utils/interfaces/helpers';

const DrawerSidebarProvider: React.FC<IChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue: IDrawerSidebarContext = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <DrawerSidebarContext.Provider value={contextValue}>
      {children}
    </DrawerSidebarContext.Provider>
  );
};

export default DrawerSidebarProvider;
