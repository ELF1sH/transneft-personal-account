import React from 'react';
import styled from 'styled-components';

import Table from 'components/molecules/table/Table';

import { useWorkingScheduleContext } from 'pages/workingSchedule/context';

import { useColumns } from './hooks/useColumns';
import { getDataSourceBySchedule } from './helpers/getDataSourceBySchedule';

const MonthScheduleTable: React.FC = () => {
  const { schedule } = useWorkingScheduleContext();

  const columns = useColumns(schedule?.days ?? []);

  return (
    <TableStyled
      dataSource={getDataSourceBySchedule(schedule?.days ?? [])}
      columns={columns}
      rowKey="date"
      scroll={{ x: '700px' }}
    />
  );
};

const TableStyled = styled(Table)`
  .ant-table-cell {
    padding: 16px 2px !important;
  }
`;

export default MonthScheduleTable;
