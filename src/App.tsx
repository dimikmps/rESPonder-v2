import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { SensorProvider } from './contexts/SensorContext';
import AppContainerComponent from './components/AppContainerComponent/AppContainerComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import MainContentContainer from './components/MainContentContainerComponent/MainContentContainerComponent';
import DeviceStatusPage from './pages/DeviceStatusPage/DeviceStatusPage';
import HomePage from './pages/HomePage/HomePage';
import ErrorFallbackComponent from './components/ErrorFallbackComponent/ErrorFallbackComponent';
import MapPage from './pages/MapPage/MapPage';
import DeviceProximityPage from './pages/DeviceProximityPage/DeviceProximityPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
// import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';
import './App.css';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <AppContainerComponent>
      <CssBaseline />

      <SensorProvider>
        <BrowserRouter>
          <HeaderComponent open={drawerOpen} onToggle={handleDrawerToggle} />

          <SidebarComponent open={drawerOpen} onToggle={handleDrawerToggle} />

          <MainContentContainer
            routeComponent={
              <ErrorBoundary
                FallbackComponent={ErrorFallbackComponent}
                onReset={() => {}}
              >
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/map' element={<MapPage />} />
                  <Route path='/status' element={<DeviceStatusPage />} />
                  <Route path='/proximity' element={<DeviceProximityPage />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path='/about' element={<AboutPage />} />
                </Routes>
              </ErrorBoundary>
            }
          />
        </BrowserRouter>
      </SensorProvider>

      <FooterComponent />
    </AppContainerComponent>
  );
}

export default App;
