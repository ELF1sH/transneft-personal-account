import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import styled from 'styled-components';

import { items } from 'components/organisms/sidebar/items';

const Sidebar: React.FC = () => (
  <Sider width={220}>
    <MenuStyled
      mode="inline"
      items={items}
    />
  </Sider>
);

const MenuStyled = styled(Menu)`
  min-height: calc(100vh - ${appHeaderHeight}px);
  z-index: 2;
`;

export default Sidebar;
