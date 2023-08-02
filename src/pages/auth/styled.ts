// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import { IconButton } from 'components/atoms/iconButton/IconButton';

export const AuthPageWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    background-color: ${theme.colorBgLight};
    height: calc(100dvh);
  `};
`;

export const FormWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: absolute;
    top: 40%;
    left: calc(50% - 10px);
    transform: translate(-50%, -50%);
    
    width: min(490px, calc(100% - 20px));
    border-radius: 2px;
    padding: 20px;
    margin: 0 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    
    background-color: ${theme.colorBgContainer};
    
    >* {
      margin-bottom: 0 !important;
    }
  `};
`;

export const GoBackButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 20px;
`;
