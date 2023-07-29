import { IKeyValueDataSource } from 'components/molecules/keyValueTable/types';

import { IGetProfileResponse } from 'domain/repositories/api/interfaces/IUsersRepository';

export const getMainTableDataSource = (data?: IGetProfileResponse): IKeyValueDataSource[] => [
  {
    key: '1',
    title: 'Табельный номер',
    value: data?.employeeId.toString() ?? '',
  },
  {
    key: '2',
    title: 'ФИО',
    value: data?.fullName ?? '',
  },
  {
    key: '3',
    title: 'Должность',
    value: data?.position ?? '',
  },
  {
    key: '4',
    title: 'Подразделение',
    value: data?.division ?? '',
  },
];
