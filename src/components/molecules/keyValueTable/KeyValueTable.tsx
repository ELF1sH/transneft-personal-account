import React from 'react';
import { Table } from 'antd';

import { IKeyValueDataSource } from 'components/molecules/keyValueTable/types';
import { columns } from 'components/molecules/keyValueTable/columns';

interface KeyValueTableProps {
  dataSource: IKeyValueDataSource[];
}

const KeyValueTable: React.FC<KeyValueTableProps> = ({ dataSource }) => (
  <Table
    showHeader={false}
    dataSource={dataSource}
    columns={columns}
    bordered
    pagination={false}
  />
);

export default KeyValueTable;
