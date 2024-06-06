import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import MainContentContainer from './components/MainContentContainer/MainContentContainer';
import DeviceStatusComponent from './components/DeviceStatusComponent/DeviceStatusComponent';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UnderConstructionComponent from './components/UnderConstructionComponent/UnderConstructionComponent';
import './App.css';

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

      <BrowserRouter>
        <HeaderComponent
          appBarHeight={appBarHeight}
          open={drawerOpen}
          onToggle={handleDrawerToggle}
        />

        <SidebarComponent open={drawerOpen} onToggle={handleDrawerToggle} />

        <MainContentContainer
          routeComponent={
            <Routes>
              <Route path='/' element={<HomePageComponent />} />
              <Route
                path='/map'
                element={<UnderConstructionComponent page='Map View' />}
              />
              <Route path='/status' element={<DeviceStatusComponent />} />
              <Route
                path='/proximity'
                element={
                  <UnderConstructionComponent page='Device proximity view' />
                }
              />
              <Route
                path='/contact'
                element={<UnderConstructionComponent page='Support' />}
              />
              <Route
                path='/about'
                element={<UnderConstructionComponent page='About' />}
              />
            </Routes>
          }
        />
      </BrowserRouter>

      <FooterComponent />
    </Box>
  );
}

export default App;
