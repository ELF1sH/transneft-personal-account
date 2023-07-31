import React from 'react';
import styled from 'styled-components';

import Table from 'components/molecules/table/Table';

import { IRowDocumentsTable, useColumnsDocumentsTable } from './hooks/useColumnsDocumentsTable';

interface DocumentsTableProps {
  dataSource: IRowDocumentsTable[];
}

const DocumentsTable: React.FC<DocumentsTableProps> = ({ dataSource }) => {
  const columns = useColumnsDocumentsTable();

  return (
    <TableStyled
      columns={columns}
      dataSource={dataSource}
      rowKey="name"
      style={{ maxWidth: '700px' }}
    />
  );
};

const TableStyled = styled(Table)`
  .ant-table-cell {
    padding: 8px 10px !important;
  }
`;

export default DocumentsTable;
