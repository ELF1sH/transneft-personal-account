import React from 'react';
import styled from 'styled-components';

import Table from 'components/molecules/table/Table';

import { useColumns } from './hooks/useColumns';

const daysOut = [3, 4, 10, 11, 17, 18, 24, 25];
const daysHoliday = [12];

const presence: [number, string][] = Array.from(
  { length: 31 },
  (x, i) => [i + 1, daysOut.includes(i + 1) || daysHoliday.includes(i + 1) ? 'В' : '8'],
);
const presenceObj = Object.fromEntries(presence);
presenceObj.date = 'Явка';

const night: [number, string][] = Array.from({ length: 31 }, (x, i) => [i + 1, '']);
const nightObj = Object.fromEntries(night);
nightObj.date = 'Ночь';

const MonthScheduleTable: React.FC = () => {
  const columns = useColumns(daysOut, daysHoliday);

  return (
    <TableStyled
      dataSource={[presenceObj, nightObj]}
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
