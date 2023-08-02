import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';
import { Button } from 'antd';

export const IconButton: React.FC<ButtonProps> = (props) => (
  <IconButtonStyled
    type="text"
    {...props}
  />
);

const IconButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
