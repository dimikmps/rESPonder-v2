import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import MainContentContainer from './components/MainContentContainer/MainContentContainer';
import DeviceStatusComponent from './components/DeviceStatusComponent/DeviceStatusComponent';
import HomePage from './pages/HomePage/HomePage';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';
import './App.css';

function App() {
  const theme = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      mt={theme.custom.appBarHeight}
      ml={theme.custom.sidebarClosedWidth}
      height={`calc(100vh - ${theme.custom.appBarHeight})`}
      width={`calc(100vw -  ${theme.custom.sidebarClosedWidth})`}
      overflow='hidden'
      position='relative'
    >
      <CssBaseline />

      <BrowserRouter>
        <HeaderComponent open={drawerOpen} onToggle={handleDrawerToggle} />

        <SidebarComponent open={drawerOpen} onToggle={handleDrawerToggle} />

        <MainContentContainer
          routeComponent={
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='/map'
                element={<UnderConstructionPage page='Map View' />}
              />
              <Route path='/status' element={<DeviceStatusComponent />} />
              <Route
                path='/proximity'
                element={<UnderConstructionPage page='Device proximity view' />}
              />
              <Route
                path='/contact'
                element={<UnderConstructionPage page='Support' />}
              />
              <Route
                path='/about'
                element={<UnderConstructionPage page='About' />}
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
