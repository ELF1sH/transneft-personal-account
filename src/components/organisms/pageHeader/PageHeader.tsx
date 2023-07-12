import React from 'react';
import { Typography } from 'antd';
import { useLocation } from 'react-router-dom';

import { getHeaderTitle } from 'components/organisms/pageHeader/helpers/getHeaderTitle';
import { getBreadcrumbsItems } from 'components/organisms/pageHeader/helpers/getBreadcrumbsItems';
import Breadcrumb from 'components/molecules/breadcrumb/Breadcrumb';
import { PageHeaderSpace, TitleSpace } from 'components/organisms/pageHeader/styled';

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <PageHeaderSpace $padding="16px 24px" $direction="vertical" $gap={8}>
      <Breadcrumb items={getBreadcrumbsItems(pathname)} />
      <TitleSpace $alignItems="center">
        <Typography.Title level={3}>{getHeaderTitle(pathname)}</Typography.Title>
      </TitleSpace>
    </PageHeaderSpace>
  );
};

export default PageHeader;
