import { ColumnsType } from 'antd/es/table';

import { IEducation } from 'domain/entities/education';

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
    dataIndex: 'educationPeriod',
    align: 'center',
  },
];
