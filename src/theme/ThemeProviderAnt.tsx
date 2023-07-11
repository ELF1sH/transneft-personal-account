import React from 'react';
import { ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';
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

export default observer(ThemeProviderAnt);
