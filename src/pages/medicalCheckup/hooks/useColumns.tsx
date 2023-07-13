import { ColumnsType } from 'antd/es/table';

import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

export const useColumns = (): ColumnsType<IMedicalCheckup> => [
  {
    title: 'Вид',
    key: 'type',
    dataIndex: 'type',
    align: 'center',
  },
  {
    title: 'Дата прохождения',
    key: 'date',
    dataIndex: 'date',
    align: 'center',
  },
  {
    title: 'Номер заключения',
    key: 'number',
    dataIndex: 'number',
    align: 'center',
  },
];
