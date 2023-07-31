import React from 'react';
// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Typography } from 'antd';

import { useUserContext } from 'modules/providers/userProvider/context';

const Debt: React.FC = () => {
  const { profile } = useUserContext();

  return (
    <div>
      <TitleWrapper>
        <Typography.Text>Дебиторская задолженность</Typography.Text>
      </TitleWrapper>
      <ValueWrapper>
        <Typography.Text>{`${profile?.debt ? profile.debt / 100 : 0}₽`}</Typography.Text>
      </ValueWrapper>
    </div>
  );
};

const TitleWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    background-color: #fff;
    padding: 8px 16px;
    font-weight: bold;
    position: relative;
    &::after {
      content: '';
      
      display: block;
      width: 80%;
      height: 1px;
      
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      
      background-color: ${theme['gray-4']};
    }
  `}
`;

const ValueWrapper = styled.div`
  background-color: #fff;
  padding: 16px;
`;

export default Debt;
