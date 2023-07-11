import React from 'react';
import { Typography } from 'antd';

import logo from 'assets/logo.svg';

import { Avatar, AvatarWrapper, PageHeaderSpace } from 'components/organisms/appHeader/styled';
import Space from 'components/atoms/space/Space';

const AppHeader: React.FC = () => (
  <PageHeaderSpace $justifyContent="space-between" $alignItems="center" $padding="0 16px" $shrinkAllChildren>
    <img src={logo} alt="logo" draggable={false} />
    <Space $fitContent $gap={8}>
      <AvatarWrapper>
        <Avatar src="https://fakeimg.pl/24x24" />
      </AvatarWrapper>
      <Typography.Text>Шевцов Олег Петрович</Typography.Text>
    </Space>
  </PageHeaderSpace>
);

export default AppHeader;
