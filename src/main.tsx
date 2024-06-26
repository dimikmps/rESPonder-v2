import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App.tsx';
import theme from './theme/theme.ts';
import './index.css';

async function enableMocking() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'production'
  ) {
    const { worker } = await import('./mocks/browser.ts');

    return worker.start();
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
});
