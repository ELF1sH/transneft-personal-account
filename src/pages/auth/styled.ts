// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

export const AuthPageWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    background-color: ${theme.colorBgLight};
    height: 100vh;
  `};
`;

export const FormWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 490px;
    border-radius: 2px;
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    text-align: center;
    
    background-color: ${theme.colorBgContainer};
    
    >* {
      margin-bottom: 0 !important;
    }
  `};
`;
