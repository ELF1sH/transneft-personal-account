import React from 'react';
import { Table, TableProps } from 'antd';
import styled from 'styled-components';

import { IWorkingScheduleSummarize } from 'domain/entities/workingSchedule';

import { useColumns } from 'pages/workingSchedule/components/scheduleSummarizeTable/hooks/useColumns';

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
      bordered
      rowKey="id"
      pagination={false}
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
