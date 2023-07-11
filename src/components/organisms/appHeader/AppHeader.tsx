import React from 'react';
import { Typography } from 'antd';

import logo from 'assets/logo.svg';

import { Avatar, PageHeaderSpace } from 'components/organisms/appHeader/styled';
import Space from 'components/atoms/space/Space';

const AppHeader: React.FC = () => (
  <PageHeaderSpace $justifyContent="space-between" $alignItems="center" $padding="0 16px" $shrinkAllChildren>
    <img src={logo} alt="logo" draggable={false} />
    <Space $fitContent $gap={8}>
      <Avatar />
      <Typography.Text>Шевцов Олег Петрович</Typography.Text>
    </Space>
  </PageHeaderSpace>
);

export default AppHeader;
