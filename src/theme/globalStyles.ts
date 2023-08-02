import { createGlobalStyle } from 'styled-components';
import { colors } from 'theme/colors';

export const GlobalStyles = createGlobalStyle`
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
  
  .ant-table-thead > tr > th.ant-table-cell {
    background-color: ${colors.COLOR_BG_PRIMARY};
  }
  .ant-table-tbody .ant-table-row:nth-child(2n + 1) {
    background-color: ${colors.COLOR_BG_FILL_ALTER} !important;
  }
  
  .ant-pagination-options {
    display: inline-block !important;
  }
`;
