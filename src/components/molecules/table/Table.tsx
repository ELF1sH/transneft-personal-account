import React from 'react';
import { Table as TableAntd, TableProps } from 'antd';

const Table: React.FC<TableProps<any>> = (props) => (
  <TableAntd<any>
    bordered
    pagination={false}
    locale={{
      emptyText: 'Нет данных',
    }}
    {...props}
  />
);

export default Table;
