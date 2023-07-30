import React from 'react';

import { IKeyValueDataSource } from 'components/molecules/keyValueTable/types';
import { columns } from 'components/molecules/keyValueTable/columns';
import Table from 'components/molecules/table/Table';

interface KeyValueTableProps {
  dataSource: IKeyValueDataSource[];
}

const KeyValueTable: React.FC<KeyValueTableProps> = ({ dataSource }) => (
  <Table
    showHeader={false}
    dataSource={dataSource}
    columns={columns}
    pagination={false}
  />
);

export default KeyValueTable;
