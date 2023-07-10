import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as themeAnt } from 'antd';
import { getTokensForStyledComponents } from 'theme/theme';
import { GlobalStyles } from 'theme/globalStyles';

interface ThemeProviderStyledComponentsProps {
  children: React.ReactNode;
}

const ThemeProviderStyledComponents: React.FC<ThemeProviderStyledComponentsProps> = ({
  children,
}) => {
  const theme = themeAnt.useToken();

  return (
    <ThemeProvider theme={getTokensForStyledComponents(theme.token)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderStyledComponents;
