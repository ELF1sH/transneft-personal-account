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
    render: (value: string) => getContent(day, value),
  })),
];

const getContent = (day: IScheduleDay, value: string): string | null => {
  switch (day.type) {
    case IScheduleDayType.GENERAL:
      return value === '0' ? null : value;
    case IScheduleDayType.WEEKEND:
      return 'В';
    case IScheduleDayType.HOLIDAY:
      return 'В';
    case IScheduleDayType.LOCAL_TRAINING:
      return 'ПК';
    case IScheduleDayType.NON_LOCAL_TRAINING:
      return 'ПМ';
    case IScheduleDayType.BUSINESS_TRIP:
      return 'К';
    case IScheduleDayType.EXAMINATION:
      return 'Гм';
    case IScheduleDayType.UNIVERSITY:
      return 'У';
    case IScheduleDayType.VACATION:
      return 'ОТ';
    case IScheduleDayType.ILLNESS:
      return 'Б';
    case IScheduleDayType.MOBILIZATION:
      return 'М';
    case IScheduleDayType.FIRED:
      return 'УВ';
    case IScheduleDayType.EMPLOYED:
      return 'ПР';
    default:
      return '';
  }
};
