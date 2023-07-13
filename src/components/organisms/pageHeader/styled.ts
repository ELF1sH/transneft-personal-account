// @ts-ignore
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import Space from 'components/atoms/space/Space';

export const PageHeaderSpace = styled(Space)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    background-color: ${theme.colorBgPrimary};
    height: fit-content;
  `};
`;

export const TitleSpace = styled(Space)`
  height: fit-content;
  word-break: break-word;
`;
