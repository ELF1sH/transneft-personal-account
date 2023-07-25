import { ColumnsType } from 'antd/es/table';

export const useColumns = (daysOut: number[], daysHoliday: number[]): ColumnsType<object> => [
  {
    title: 'Дата',
    key: 'date',
    dataIndex: 'date',
    align: 'center',
    width: '40px',
  },
  ...Array.from({ length: 31 }, (x, i) => ({
    title: (i + 1).toString(),
    key: (i + 1).toString(),
    dataIndex: (i + 1).toString(),
    align: 'center' as const,
    width: '28px',
    onCell: () => ({
      style: daysOut.includes(i + 1)
        ? { background: '#CCFFCC' }
        : daysHoliday.includes(i + 1)
          ? { background: '#FFCCFF' }
          : {},
    }),
    onHeaderCell: () => ({
      style: daysOut.includes(i + 1)
        ? { background: '#CCFFCC' }
        : daysHoliday.includes(i + 1)
          ? { background: '#FFCCFF' }
          : {},
    }),
  })),
];
