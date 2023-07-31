import React from 'react';
import styled from 'styled-components';

import Table from 'components/molecules/table/Table';

import { useWorkingScheduleContext } from 'pages/workingSchedule/context';

import { useColumns } from './hooks/useColumns';

interface SummarizeTableRow {
  differenceMonth: number;
  holidayHoursMonth: number;
  nightHoursMonth: number;
  totalHoursMonth: number;
  workedHoursMonth: number;

  differenceYear: number;
  holidayHoursYear: number;
  nightHoursYear: number;
  totalHoursYear: number;
  workedHoursYear: number;
}

const ScheduleSummarizeTable: React.FC = () => {
  const columns = useColumns();
  const { schedule } = useWorkingScheduleContext();

  const row: SummarizeTableRow = {
    differenceMonth: schedule?.monthlyStatistics.difference ?? 0,
    holidayHoursMonth: schedule?.monthlyStatistics.holidayHours ?? 0,
    nightHoursMonth: schedule?.monthlyStatistics.nightHours ?? 0,
    totalHoursMonth: schedule?.monthlyStatistics.totalHours ?? 0,
    workedHoursMonth: schedule?.monthlyStatistics.workedHours ?? 0,

    differenceYear: schedule?.yearlyStatistics.difference ?? 0,
    holidayHoursYear: schedule?.yearlyStatistics.holidayHours ?? 0,
    nightHoursYear: schedule?.yearlyStatistics.nightHours ?? 0,
    totalHoursYear: schedule?.yearlyStatistics.totalHours ?? 0,
    workedHoursYear: schedule?.yearlyStatistics.workedHours ?? 0,
  };

  return (
    <TableStyled
      columns={columns}
      dataSource={[row]}
      rowKey="differenceMonth"
      scroll={{ x: '700px' }}
    />
  );
};

const TableStyled = styled(Table)`
  .ant-table-cell {
    padding: 16px 4px !important;
  }
`;

export default ScheduleSummarizeTable;
