import React from 'react';
import { Typography } from 'antd';
import { useLocation } from 'react-router-dom';

import { BreadcrumbItem } from 'components/molecules/breadcrumb/types';
import Breadcrumb from 'components/molecules/breadcrumb/Breadcrumb';
import { PageHeaderSpace, TitleSpace } from 'components/organisms/pageHeader/styled';

import { getRoute } from 'utils/routes/getRoute';
import { getRouteItemLabel } from 'utils/routes/getRouteLabels';

const getBreadcrumbsItems = (pathname: string): BreadcrumbItem[] => {
  const items = `base${pathname}`.split('/').filter((item) => !!item);

  return items.map((item) => ({ text: getRouteItemLabel(item), to: getRoute(item) }));
};

const getHeaderTitle = (pathname: string): string => {
  const targetRouteItem = pathname.split('/').at(-1);

  return getRouteItemLabel(targetRouteItem ?? '');
};

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
