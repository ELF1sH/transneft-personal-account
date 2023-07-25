import React from 'react';
import { Table } from 'antd';

import { IWorkingScheduleUserInfo } from 'domain/entities/workingSchedule';

import { useColumns } from 'pages/workingSchedule/components/userInfoTable/hooks/useColumns';

const dataSource: IWorkingScheduleUserInfo[] = [
  {
    id: '1',
    fullName: 'Шевцов О. П.',
    jobTitle: 'Инженер-механик 1 категории',
    personnelNumber: '13023478',
    workingScheduleNumber: 'N40N0100',
    feature: 'м',
  },
];

const UserInfoTable: React.FC = () => {
  const columns = useColumns();

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      bordered
      rowKey="id"
      scroll={{ x: '700px' }}
    />
  );
};

export default UserInfoTable;