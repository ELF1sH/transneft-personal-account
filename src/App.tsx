import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import { Layout } from 'antd';

import Sidebar from 'components/organisms/sidebar/Sidebar';
import AppHeader from 'components/organisms/appHeader/AppHeader';

const App: React.FC = () => (
  <>
    <AppHeader />
    <Layout style={{ minHeight: `calc(100vh - ${appHeaderHeight}px)` }}>
      <Sidebar />
    </Layout>
  </>
);

export default App;
