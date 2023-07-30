import React from 'react';

import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';
import Table from 'components/molecules/table/Table';

import { IInventoryControlItem } from 'domain/entities/inventoryControlItem';

import { useColumns } from './hooks/useColumns';

export interface InventoryControlPageViewProps {
  measure: IInventoryControlItem;
}

const InventoryControlPageView: React.FC<InventoryControlPageViewProps> = ({ measure }) => {
  const columns = useColumns();

  return (
    <PageContentInnerWrapper>
      <Table
        columns={columns}
        dataSource={[measure]}
        rowKey="height"
        scroll={{ x: 'fit-content' }}
      />
    </PageContentInnerWrapper>
  );
};

export default InventoryControlPageView;
