import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Typography } from 'antd';

import { IEducation } from 'domain/entities/education';

const { Text } = Typography;

export const useColumns = (): ColumnsType<IEducation> => [
  {
    title: 'Учебный центр',
    key: 'educationCenter',
    dataIndex: 'educationCenter',
    align: 'center',
  },
  {
    title: 'Город проведения',
    key: 'city',
    dataIndex: 'city',
    align: 'center',
  },
  {
    title: 'Наименование курсов',
    key: 'courseName',
    dataIndex: 'courseName',
    align: 'center',
  },
  {
    title: 'Планируемые даты обучения',
    key: 'educationPeriod',
    align: 'center',
    render: (_, { startDate, endDate }) => (
      <Text>{`${startDate}–${endDate}`}</Text>
    ),
  },
];
