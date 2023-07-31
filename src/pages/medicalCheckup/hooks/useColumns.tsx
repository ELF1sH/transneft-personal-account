import { ColumnsType } from 'antd/es/table';

import { IMedicalCheckup } from 'domain/entities/medicalCheckup';

import { getDate } from 'utils/dateTime/getDate';
import { parseMedicalCheckupType } from 'utils/parsers/parseMedicalCheckupType';

export const useColumns = (): ColumnsType<IMedicalCheckup> => [
  {
    title: 'Вид',
    key: 'type',
    dataIndex: 'type',
    align: 'center',
    render: (type) => parseMedicalCheckupType(type),
  },
  {
    title: 'Дата прохождения',
    key: 'date',
    dataIndex: 'date',
    align: 'center',
    render: (date) => getDate(date),
  },
  {
    title: 'Номер заключения',
    key: 'certificate',
    dataIndex: 'certificate',
    align: 'center',
  },
];
