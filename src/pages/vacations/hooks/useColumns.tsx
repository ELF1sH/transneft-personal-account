import { ColumnsType } from 'antd/es/table';

import { IVacation } from 'domain/entities/vacation';

export const useColumns = (): ColumnsType<IVacation> => [
  {
    title: 'Дата',
    key: 'date',
    dataIndex: 'date',
    align: 'center',
  },
  {
    title: 'Дни отпуска',
    key: 'vacationDays',
    children: [
      {
        title: 'Основной',
        key: 'main',
        dataIndex: 'main',
        align: 'center',
        render: (value) => (!value ? '-' : value),
      },
      {
        title: 'МКС',
        key: 'mks',
        dataIndex: 'mks',
        align: 'center',
        render: (value) => (!value ? '-' : value),
      },
      {
        title: 'Ненормированные дни',
        key: 'irregularDays',
        dataIndex: 'irregularDays',
        align: 'center',
        render: (value) => (!value ? '-' : value),
      },
      {
        title: 'Общее кол-во дней',
        key: 'totalDays',
        dataIndex: 'totalDays',
        align: 'center',
        render: (value) => (!value ? '-' : value),
      },
    ],
  },
  {
    title: 'Материальная помощь',
    key: 'materialAid',
    dataIndex: 'materialAid',
    align: 'center',
    render: (value) => (value && '+'),
  },
  {
    title: 'Льготный проезд',
    key: 'reducedFare',
    dataIndex: 'reducedFare',
    align: 'center',
    render: (value) => (value && '+'),
  },
];
