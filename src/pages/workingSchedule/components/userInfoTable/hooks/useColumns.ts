import { ColumnsType } from 'antd/es/table';

export const useColumns = (): ColumnsType => [
  {
    title: 'ФИО',
    key: 'fullName',
    dataIndex: 'fullName',
    align: 'center',
  },
  {
    title: 'Должность',
    key: 'position',
    dataIndex: 'position',
    align: 'center',
  },
  {
    title: 'Табельный номер',
    key: 'employeeId',
    dataIndex: 'employeeId',
    align: 'center',
  },
  {
    title: 'Номер режима работы',
    key: 'number',
    dataIndex: 'number',
    align: 'center',
  },
  {
    title: 'Признак',
    key: 'sex',
    dataIndex: 'sex',
    align: 'center',
  },
];
