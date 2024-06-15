import { createTheme } from '@mui/material/styles';

// Extend the MUI theme interface to include custom properties
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      appBarHeight: string;
      sidebarOpenWidth: string;
      sidebarClosedWidth: string;
    };
  }
  // Extend the MUI theme options interface to include custom properties
  interface ThemeOptions {
    custom?: {
      appBarHeight?: string;
      sidebarOpenWidth?: string;
      sidebarClosedWidth?: string;
    };
  }
}

// Define your custom properties
const customTheme = {
  palette: {
    // Override default colours
    primary: {
      main: '#e69700',
    },
  },
  custom: {
    appBarHeight: '64px',
    sidebarClosedWidth: '66px',
    sidebarOpenWidth: '272px',
  },
};

// Extend the default theme by merging it with your custom properties
const theme = createTheme({
  ...customTheme,
});

export default theme;
