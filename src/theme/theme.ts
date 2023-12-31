import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { DefaultTheme } from 'styled-components';
import { GlobalToken } from 'antd/es/theme/interface';
import { colors } from 'theme/colors';

const { defaultAlgorithm } = theme;

export const getThemeConfig = (tokens: GlobalToken): ThemeConfig => ({
  algorithm: defaultAlgorithm,
  token: {
    fontSize: 16,
    colorText: colors.COLOR_TEXT,
    colorTextHeading: colors.COLOR_TEXT,
    colorPrimary: colors.COLOR_PRIMARY,
  },
  components: {
    Menu: {
      colorBgContainer: colors.COLOR_BG_PRIMARY,
      colorBgTextHover: colors.COLOR_BG_HIGHLIGHT,
      controlItemBgActive: colors.COLOR_BG_HIGHLIGHT,
    },
  },
} as ThemeConfig);

export const getTokensForStyledComponents = (
  tokens: GlobalToken,
): DefaultTheme => ({
  ...tokens,
  ...colors.grayPalette,

  colorBgPrimary: colors.COLOR_BG_PRIMARY,
  colorBgLight: colors.COLOR_BG_LIGHT,
  colorBgHighlight: colors.COLOR_BG_HIGHLIGHT,

  colorBgHighlightCell: colors.COLOR_BG_HIGHLIGHT_CELL,

  shadowXL: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  shadowSM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowBase: '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px #f0f0f0',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  shadow2Xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  shadowOutline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  shadowInner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',

  fontSize3Xs: '0.45rem',
  fontSize2Xs: '0.625rem',
  fontSizeXs: '0.75rem',
  fontSizeSm: '0.875rem',
  fontSizeMd: '1rem',
  fontSizeLg: '1.125rem',
  fontSizeXl: '1.25rem',
  fontSize2Xl: '1.5rem',
  fontSize3Xl: '1.875rem',
  fontSize4Xl: '2.25rem',
  fontSize5Xl: '3rem',
});
