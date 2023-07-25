import { createContext, useContext } from 'react';

export interface IDrawerSidebarContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const DrawerSidebarContext = createContext<IDrawerSidebarContext | undefined>(undefined);

export const useDrawerSidebarContext = () => {
  const context = useContext(DrawerSidebarContext);

  if (!context) throw new Error();

  return context;
};
