import React from 'react';
import { ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';
import { getThemeConfig } from 'theme/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviderAnt: React.FC<ThemeProviderProps> = ({ children }) => (
  <ConfigProvider theme={getThemeConfig()}>
    { children }
  </ConfigProvider>
);

export default observer(ThemeProviderAnt);
