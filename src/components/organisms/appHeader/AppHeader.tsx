import { appHeaderHeight } from 'constants/appHeaderHeight';

import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import logo from 'assets/logo.svg';
import imagePlaceholder from 'assets/imagePlaceholder.png';

import Space from 'components/atoms/space/Space';

const PageHeaderSpace = styled(Space)`
  height: ${appHeaderHeight}px;
  width: 100%;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-image: url(${imagePlaceholder});
  background-position: center;
  background-size: cover;
`;

const AppHeader: React.FC = () => (
  <PageHeaderSpace $justifyContent="space-between" $alignItems="center" $padding="0 16px" $shrinkAllChildren>
    <img src={logo} alt="logo" />
    <Space $fitContent $gap={8}>
      <Avatar />
      <Typography.Text>Шевцов Олег Петрович</Typography.Text>
    </Space>
  </PageHeaderSpace>
);

export default AppHeader;
