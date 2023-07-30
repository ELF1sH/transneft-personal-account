import React from 'react';

import Table from 'components/molecules/table/Table';

import { useWorkingScheduleContext } from 'pages/workingSchedule/context';

import { useColumns } from './hooks/useColumns';

const UserInfoTable: React.FC = () => {
  const columns = useColumns();

  const { schedule } = useWorkingScheduleContext();

  return (
    <Table
      columns={columns}
      dataSource={[schedule]}
      rowKey="fullName"
      scroll={{ x: '700px' }}
    />
  );
};

export default UserInfoTable;
