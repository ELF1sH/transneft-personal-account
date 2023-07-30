import React from 'react';
import { TableProps } from 'antd';
import styled from 'styled-components';

import Table from 'components/molecules/table/Table';

import { IWorkingScheduleSummarize } from 'domain/entities/workingSchedule';

import { useColumns } from './hooks/useColumns';

const dataSource: IWorkingScheduleSummarize[] = [
  {
    id: '1',
    hoursScheduled: '168,00',
    hoursStandard: '168,00',
    hoursScheduledYear: '488,00',
    hoursStandardYear: '488,00',
  },
];

const ScheduleSummarizeTable: React.FC = () => {
  const columns = useColumns();

  return (
    <TableStyled
      columns={columns}
      dataSource={dataSource}
      rowKey="id"
      scroll={{ x: '700px' }}
    />
  );
};

const TableStyled = styled(Table)<TableProps<IWorkingScheduleSummarize>>`
  .ant-table-cell {
    padding: 16px 2px !important;
  }
`;

export default ScheduleSummarizeTable;
