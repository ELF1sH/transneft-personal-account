import React from 'react';
import { Breadcrumb, Typography } from 'antd';

import { PageHeaderSpace, TitleSpace } from 'components/organisms/pageHeader/styled';

const PageHeader: React.FC = () => (
  <PageHeaderSpace $padding="16px 24px" $direction="vertical" $gap={8}>
    <Breadcrumb>
      <Breadcrumb.Item>sample</Breadcrumb.Item>
      <Breadcrumb.Item>sample</Breadcrumb.Item>
      <Breadcrumb.Item>sample</Breadcrumb.Item>
      <Breadcrumb.Item>sample</Breadcrumb.Item>
    </Breadcrumb>
    <TitleSpace $alignItems="center">
      <Typography.Title level={3}>Личный кабинет</Typography.Title>
    </TitleSpace>
  </PageHeaderSpace>
);

export default PageHeader;
