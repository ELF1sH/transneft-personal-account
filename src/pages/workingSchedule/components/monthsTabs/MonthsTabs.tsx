import React from 'react';
import styled from 'styled-components';
import { Select, SelectProps, Tabs } from 'antd';

import { useWorkingScheduleContext } from 'pages/workingSchedule/context';

import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

import { items } from './constants/tabMonthsItems';
import { tabItemsToSelectOptions } from './helpers/tabItemsToSelectOptions';

const MonthsTabs: React.FC = () => {
  const { windowWidth } = useWindowWidth();

  const { currentTab, setCurrentTab } = useWorkingScheduleContext();

  return (
    windowWidth > 800
      ? (
        <TabStyled
          activeKey={currentTab.toString()}
          items={items}
          centered
          size="small"
          onChange={(activeTab: string) => setCurrentTab(+activeTab)}
        />
      )
      : (
        <SelectStyled
          options={tabItemsToSelectOptions(items)}
          value={currentTab.toString()}
          onChange={setCurrentTab}
        />
      )
  );
};

const TabStyled = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
  
  @media (max-width: 1300px) {
    .ant-tabs-nav-list {
      display: grid !important;
      grid-template-columns: repeat(6, 1fr);
      .ant-tabs-tab {
        justify-content: center;
        margin: 0 16px !important;
        border-bottom: 2px solid white;
        transition: .2s all;
      }
      .ant-tabs-tab-active {
        border-bottom: 2px solid #035597;
      }
      .ant-tabs-ink-bar {
        display: none;
      }
    }
  }
`;

const SelectStyled = styled(Select)<SelectProps>`
  width: 100%;
  padding: 10px 0;
`;

export default MonthsTabs;
