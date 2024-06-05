import { useState } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import MainContentContainer from './components/MainContentContainer/MainContentContainer';
import './App.css';

// TODO: Externalise these
const appBarHeight = 64;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      mt={appBarHeight + 'px'}
      pl={theme.spacing(7)}
      width='100vw'
      height={`calc(100vh - ${appBarHeight}px)`}
      overflow='hidden'
      position='relative'
    >
      <CssBaseline />
      <HeaderComponent
        appBarHeight={appBarHeight}
        open={drawerOpen}
        onToggle={handleDrawerToggle}
      />
      <SidebarComponent open={drawerOpen} onToggle={handleDrawerToggle} />

      {/* TODO: Refactor this this to accommodate for child components */}
      <MainContentContainer />

      <FooterComponent />
    </Box>
  );
}

export default App;
