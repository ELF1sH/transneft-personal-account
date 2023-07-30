import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Typography } from 'antd';

const { Text } = Typography;

export const useColumns = (): ColumnsType => [
  {
    title: 'Рабочее время за месяц, часов',
    key: 'month',
    align: 'center',
    children: [
      {
        title: 'По графику',
        key: 'workedHoursMonth',
        dataIndex: 'workedHoursMonth',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
      {
        title: 'Норма',
        key: 'totalHoursMonth',
        dataIndex: 'totalHoursMonth',
        align: 'center',
        width: '0px',
        render: (value) => (<Text type="danger">{value || ''}</Text>),
      },
      {
        title: 'Отклонение от нормы',
        key: 'differenceMonth',
        dataIndex: 'differenceMonth',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
      {
        title: 'Кол-во ночных часов',
        key: 'nightHoursMonth',
        dataIndex: 'nightHoursMonth',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
      {
        title: 'Кол-во праздничных часов',
        key: 'holidayHoursMonth',
        dataIndex: 'holidayHoursMonth',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
    ],
  },
  {
    title: 'Рабочее время с начала года, часов',
    key: 'year',
    align: 'center',
    children: [
      {
        title: 'По графику',
        key: 'workedHoursYear',
        dataIndex: 'workedHoursYear',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
      {
        title: 'Норма',
        key: 'totalHoursYear',
        dataIndex: 'totalHoursYear',
        align: 'center',
        width: '0px',
        render: (value) => (<Text type="danger">{value || ''}</Text>),
      },
      {
        title: 'Отклонение от нормы',
        key: 'differenceYear',
        dataIndex: 'differenceYear',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
      {
        title: 'Кол-во ночных часов',
        key: 'nightHoursYear',
        dataIndex: 'nightHoursYear',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
      {
        title: 'Кол-во праздничных часов',
        key: 'holidayHoursYear',
        dataIndex: 'holidayHoursYear',
        align: 'center',
        width: '0px',
        render: (value) => value || '',
      },
    ],
  },
];
