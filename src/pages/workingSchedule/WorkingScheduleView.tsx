import React from 'react';

import Space from 'components/atoms/space/Space';
import PageContentInnerWrapper from 'components/wrappers/pageContentInnerWrapper/PageContentInnerWrapper';

import ScheduleSummarizeTable from 'pages/workingSchedule/components/scheduleSummarizeTable/ScheduleSummarizeTable';
import MonthScheduleTable from 'pages/workingSchedule/components/monthScheduleTable/MonthScheduleTable';
import UserInfoTable from 'pages/workingSchedule/components/userInfoTable/UserInfoTable';
import MonthsTabs from 'pages/workingSchedule/components/monthsTabs/MonthsTabs';

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
