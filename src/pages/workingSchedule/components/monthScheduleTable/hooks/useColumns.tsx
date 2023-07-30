import { ColumnsType } from 'antd/es/table';

import { IScheduleDay, IScheduleDayType } from 'domain/entities/workingSchedule';

import { getDay } from 'utils/dateTime/getDay';

export const useColumns = (days: IScheduleDay[]): ColumnsType<object> => [
  {
    title: 'Дата',
    key: 'date',
    dataIndex: 'date',
    align: 'center',
    width: '40px',
  },
  ...days.map((day) => ({
    title: getDay(day.date),
    key: getDay(day.date),
    dataIndex: getDay(day.date),
    align: 'center' as const,
    width: '28px',
    onCell: () => ({
      style: day.type === IScheduleDayType.WEEKEND
        ? { background: '#CCFFCC' }
        : day.type === IScheduleDayType.HOLIDAY
          ? { background: '#FFCCFF' }
          : {},
    }),
    onHeaderCell: () => ({
      style: day.type === IScheduleDayType.WEEKEND
        ? { background: '#CCFFCC' }
        : day.type === IScheduleDayType.HOLIDAY
          ? { background: '#FFCCFF' }
          : {},
    }),
  })),
];
