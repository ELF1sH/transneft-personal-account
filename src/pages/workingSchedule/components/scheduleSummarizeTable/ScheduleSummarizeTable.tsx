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
    differenceMonth: schedule!.monthlyStatistics.difference,
    holidayHoursMonth: schedule!.monthlyStatistics.holidayHours,
    nightHoursMonth: schedule!.monthlyStatistics.nightHours,
    totalHoursMonth: schedule!.monthlyStatistics.totalHours,
    workedHoursMonth: schedule!.monthlyStatistics.workedHours,

    differenceYear: schedule!.yearlyStatistics.difference,
    holidayHoursYear: schedule!.yearlyStatistics.holidayHours,
    nightHoursYear: schedule!.yearlyStatistics.nightHours,
    totalHoursYear: schedule!.yearlyStatistics.totalHours,
    workedHoursYear: schedule!.yearlyStatistics.workedHours,
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
    padding: 16px 2px !important;
    
    @media (max-width: 1200px) {
      padding: 16px 0 !important;
    }
  }
`;

export default ScheduleSummarizeTable;
