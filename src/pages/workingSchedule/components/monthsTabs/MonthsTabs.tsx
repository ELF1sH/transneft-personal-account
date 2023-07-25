import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, SelectProps, Tabs } from 'antd';

import { tabItemsToSelectOptions } from 'pages/workingSchedule/components/monthsTabs/helpers/tabItemsToSelectOptions';
import { items } from 'pages/workingSchedule/components/monthsTabs/constants/tabMonthsItems';

import { useWindowWidth } from 'utils/hooks/layout/useWindowWidth';

interface MonthsTabsProps {

}

const MonthsTabs: React.FC<MonthsTabsProps> = () => {
  const { windowWidth } = useWindowWidth();

  const [activeTab, setActiveTab] = useState(items![0].key);

  return (
    windowWidth > 800
      ? (
        <TabStyled
          activeKey={activeTab}
          items={items}
          centered
          size="small"
          onChange={setActiveTab}
        />
      )
      : (
        <SelectStyled
          options={tabItemsToSelectOptions(items)}
          value={activeTab}
          onChange={setActiveTab}
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
