import { pagination } from 'constants/tables/pagination';

import React from 'react';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';
import Table from 'components/molecules/table/Table';

import { IInventoryControlItem } from 'domain/entities/inventoryControlItem';

import { useColumns } from './hooks/useColumns';

const dataSource: IInventoryControlItem[] = [
  {
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
        pagination={pagination}
        rowKey="height"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default InventoryControlPage;
