import React from 'react';
import { ConfigProvider } from 'antd';
import { getThemeConfig } from 'theme/theme';
import { useToken } from 'antd/es/theme/internal';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviderAnt: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useToken();

  return (
    <ConfigProvider theme={getThemeConfig(theme[1])}>
      { children }
    </ConfigProvider>
  );
};

export default ThemeProviderAnt;
