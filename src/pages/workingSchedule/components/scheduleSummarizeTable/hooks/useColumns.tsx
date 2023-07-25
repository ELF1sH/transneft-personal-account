import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Typography } from 'antd';

import { IWorkingScheduleSummarize } from 'domain/entities/workingSchedule';

const { Text } = Typography;

export const useColumns = (): ColumnsType<IWorkingScheduleSummarize> => [
  {
    title: 'Рабочее время за месяц, часов',
    key: 'month',
    align: 'center',
    children: [
      {
        title: 'По графику',
        key: 'hoursScheduled',
        dataIndex: 'hoursScheduled',
        align: 'center',
        width: '0px',
      },
      {
        title: 'Норма',
        key: 'hoursStandard',
        dataIndex: 'hoursStandard',
        align: 'center',
        width: '0px',
        render: (value) => (<Text type="danger">{value}</Text>),
      },
      {
        title: 'Отклонение от нормы',
        key: 'deviationFromTheStandard',
        dataIndex: 'deviationFromTheStandard',
        align: 'center',
        width: '0px',
      },
      {
        title: 'Кол-во ночных часов',
        key: 'hoursNight',
        dataIndex: 'hoursNight',
        align: 'center',
        width: '0px',
      },
      {
        title: 'Кол-во праздничных часов',
        key: 'hoursHoliday',
        dataIndex: 'hoursHoliday',
        align: 'center',
        width: '0px',
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
        key: 'hoursScheduledYear',
        dataIndex: 'hoursScheduledYear',
        align: 'center',
        width: '0px',
      },
      {
        title: 'Норма',
        key: 'hoursStandardYear',
        dataIndex: 'hoursStandardYear',
        align: 'center',
        render: (value) => (<Text type="danger">{value}</Text>),
        width: '0px',
      },
      {
        title: 'Отклонение от нормы',
        key: 'deviationFromTheStandardYear',
        dataIndex: 'deviationFromTheStandardYear',
        align: 'center',
        width: '0px',
      },
      {
        title: 'Кол-во праздничных часов',
        key: 'hoursHolidayYear',
        dataIndex: 'hoursHolidayYear',
        align: 'center',
        width: '0px',
      },
    ],
  },
];
