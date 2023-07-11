import React from 'react';
import { Breadcrumb as AntdBreadcrumb, Tooltip } from 'antd';

import Link from 'components/atoms/link/Link';
import { BreadcrumbItem } from 'components/molecules/breadcrumb/types';

interface MyBreadcrumbProps {
  items: BreadcrumbItem[];
}

const getBreadcrumbItemReactNode = (item: BreadcrumbItem) => {
  if (item.to) {
    return (
      <Link to={item.to}>{item.text}</Link>
    );
  }

  return item.text;
};

const Breadcrumb: React.FC<MyBreadcrumbProps> = ({
  items,
}) => (
  <AntdBreadcrumb
    style={{ marginBottom: '20px' }}
    items={items.map((item) => ({
      title: <Tooltip title={item.tooltip}><div>{getBreadcrumbItemReactNode(item)}</div></Tooltip>,
    }))}
  />
);

export default Breadcrumb;
