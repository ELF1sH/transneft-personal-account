// @ts-ignore
import { createGlobalStyle, DefaultTheme, ThemeProps } from 'styled-components';

export const GlobalStyles = createGlobalStyle<ThemeProps<DefaultTheme>>`
  .ant-menu-title-content {
    white-space: normal !important;
    user-select: none;
  }
  .ant-menu-submenu-title, .ant-menu-item {
    height: auto !important;
    line-height: 130% !important;
    padding: 8px 0;
  }
  .ant-menu-submenu >.ant-menu-submenu-title, .ant-menu-root >.ant-menu-item {
    padding-left: 16px !important;
  }
  .ant-menu-sub {
    >.ant-menu-item {
      padding-left: 32px !important;
    }
  }
`;
