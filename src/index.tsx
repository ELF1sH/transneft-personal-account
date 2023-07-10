import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'index.css';
import 'antd/dist/reset.css';
import ThemeProviderAnt from 'theme/ThemeProviderAnt';
import ThemeProviderStyledComponents from 'theme/ThemeProviderStyledComponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProviderAnt>
    <ThemeProviderStyledComponents>
      <App />
    </ThemeProviderStyledComponents>
  </ThemeProviderAnt>,
);
