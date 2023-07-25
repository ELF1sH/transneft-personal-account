import { ColumnsType } from 'antd/es/table';

import { IWorkingScheduleUserInfo } from 'domain/entities/workingSchedule';

export const useColumns = (): ColumnsType<IWorkingScheduleUserInfo> => [
  {
    title: 'ФИО',
    key: 'fullName',
    dataIndex: 'fullName',
    align: 'center',
  },
  {
    title: 'Должность',
    key: 'jobTitle',
    dataIndex: 'jobTitle',
    align: 'center',
  },
  {
    title: 'Табельный номер',
    key: 'personnelNumber',
    dataIndex: 'personnelNumber',
    align: 'center',
  },
  {
    title: 'Номер режима работы',
    key: 'workingScheduleNumber',
    dataIndex: 'workingScheduleNumber',
    align: 'center',
  },
  {
    title: 'Признак',
    key: 'feature',
    dataIndex: 'feature',
    align: 'center',
  },
];
