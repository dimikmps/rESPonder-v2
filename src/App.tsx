import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainerComponent from './components/AppContainerComponent/AppContainerComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import MainContentContainer from './components/MainContentContainerComponent/MainContentContainerComponent';
import DeviceStatusPage from './pages/DeviceStatusPage/DeviceStatusPage';
import HomePage from './pages/HomePage/HomePage';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';
import './App.css';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppContainerComponent>
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
              <Route path='/status' element={<DeviceStatusPage />} />
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
    </AppContainerComponent>
  );
}

export default App;
