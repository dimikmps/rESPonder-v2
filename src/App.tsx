import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import MainContentContainer from './components/MainContentContainer/MainContentContainer';
import './App.css';
import DeviceStatusComponent from './components/DeviceStatusComponent/DeviceStatusComponent';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';

// TODO: Externalise these
const appBarHeight = 64;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      mt={appBarHeight + 'px'}
      // TODO: Externalize this
      ml={'66px'}
      height={`calc(100vh - ${appBarHeight}px)`}
      width={`calc(100vw - 66px)`}
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

      <MainContentContainer>
        {/* TODO: Add Router */}
        <HomePageComponent />
        <DeviceStatusComponent />
      </MainContentContainer>

      <FooterComponent />
    </Box>
  );
}

export default App;
