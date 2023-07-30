import { ColumnsType } from 'antd/es/table';

import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

import { getDate } from 'utils/dateTime/getDate';

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
    render: (_, { date }) => getDate(date),
  },
  {
    title: 'Номер заключения',
    key: 'certificate',
    dataIndex: 'certificate',
    align: 'center',
  },
];
