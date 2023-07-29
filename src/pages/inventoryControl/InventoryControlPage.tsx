import { pagination } from 'constants/tables/pagination';

import React from 'react';
import { Table } from 'antd';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import { IInventoryControlItem } from 'domain/entities/inventoryControlItem';

import { useColumns } from './hooks/useColumns';

const dataSource: IInventoryControlItem[] = [
  {
    id: '1',
    height: 187,
    clothingSize: 48,
    footSize: 43,
    headSize: 27,
  },
];

const InventoryControlPage: React.FC = () => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={pagination}
        rowKey="id"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default InventoryControlPage;
