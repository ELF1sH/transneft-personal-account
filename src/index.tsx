import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
import 'antd/dist/reset.css';
import ThemeProviderAnt from 'theme/ThemeProviderAnt';
import ThemeProviderStyledComponents from 'theme/ThemeProviderStyledComponents';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DrawerSidebarProvider from 'components/organisms/sidebar/drawerSidebar/viewModel/provider';

import { getRoute } from './utils/routes/getRoute';
import { RouteItem } from './utils/interfaces/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
    mutations: {
      retry: 2,
    },
  },
});

export const router = createBrowserRouter([
  // match everything with "*"
  { path: '*', element: <App /> },
]);

if (window.location.pathname === getRoute(RouteItem.BASE)) {
  router.navigate(getRoute(RouteItem.PROFILE));
}

root.render(
  <ThemeProviderAnt>
    <ThemeProviderStyledComponents>
      <StyleSheetManager shouldForwardProp={(name) => !name.startsWith('$')}>
        <QueryClientProvider client={queryClient}>
          <DrawerSidebarProvider>
            <RouterProvider router={router} />
          </DrawerSidebarProvider>
        </QueryClientProvider>
      </StyleSheetManager>
    </ThemeProviderStyledComponents>
  </ThemeProviderAnt>,
);
