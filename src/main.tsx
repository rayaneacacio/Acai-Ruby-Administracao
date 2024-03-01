import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { Cardapio } from './pages/Cardapio';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Cardapio />
    </ThemeProvider>
  </React.StrictMode>,
)
