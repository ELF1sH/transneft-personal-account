import React from 'react';

import Space from 'components/atoms/space/Space';
import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import MonthsTabs from './components/monthsTabs/MonthsTabs';
import UserInfoTable from './components/userInfoTable/UserInfoTable';
import MonthScheduleTable from './components/monthScheduleTable/MonthScheduleTable';
import ScheduleSummarizeTable from './components/scheduleSummarizeTable/ScheduleSummarizeTable';

const WorkingScheduleView: React.FC = () => (
  <>
    <PageContentInnerWrapper style={{ padding: '0 24px', marginBottom: '24px' }}>
      <MonthsTabs />
    </PageContentInnerWrapper>

    <PageContentInnerWrapper>
      <Space $direction="vertical" $gap={25}>
        <UserInfoTable />

        <MonthScheduleTable />

        <ScheduleSummarizeTable />
      </Space>
    </PageContentInnerWrapper>
  </>
);

export default WorkingScheduleView;
