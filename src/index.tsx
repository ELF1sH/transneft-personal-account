import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
import 'antd/dist/reset.css';
import ThemeProviderAnt from 'theme/ThemeProviderAnt';
import ThemeProviderStyledComponents from 'theme/ThemeProviderStyledComponents';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProviderAnt>
    <ThemeProviderStyledComponents>
      <StyleSheetManager shouldForwardProp={(name) => !name.startsWith('$')}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyleSheetManager>
    </ThemeProviderStyledComponents>
  </ThemeProviderAnt>,
);
