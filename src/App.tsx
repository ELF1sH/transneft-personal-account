import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import { Layout } from 'antd';

import Space from 'components/atoms/space/Space';
import PageHeader from 'components/organisms/pageHeader/PageHeader';
import Sidebar from 'components/organisms/sidebar/Sidebar';
import AppHeader from 'components/organisms/appHeader/AppHeader';
import PageContent from 'components/organisms/pageContentWrapper/PageContentWrapper';

const App: React.FC = () => (
  <>
    <AppHeader />
    <Layout style={{ minHeight: `calc(100vh - ${appHeaderHeight}px)` }}>
      <Sidebar />
      <Space $direction="vertical">
        <PageHeader />
        <PageContent>
          <h1>adsfsf</h1>
        </PageContent>
      </Space>
    </Layout>
  </>
);

export default App;
