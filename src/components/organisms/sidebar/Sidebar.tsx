import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { items } from 'components/organisms/sidebar/items';

import { getRouteItemByRoute } from 'utils/routes/getRouteItemByRoute';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  const selectedRouteItem = getRouteItemByRoute(pathname);

  return (
    <Sider width={220}>
      <MenuStyled
        mode="inline"
        items={items}
        selectedKeys={[selectedRouteItem]}
      />
    </Sider>
  );
};

const MenuStyled = styled(Menu)`
  min-height: calc(100vh - ${appHeaderHeight}px);
  z-index: 2;
`;

export default Sidebar;
