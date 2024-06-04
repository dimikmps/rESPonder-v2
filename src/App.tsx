import { Box, Typography } from '@mui/material';
import AppBarComponent from './components/AppBarComponent/AppBarComponent';
import DeviceStatusComponent from './components/DeviceStatusComponent/DeviceStatusComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';

import './App.css';
import { useState } from 'react';

// TODO: Externalise these
const appBarHeight = 64;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box
      display="flex"
      mt={appBarHeight + 'px'}
      // TODO: Replace this once the footer has been integrated
      mb={appBarHeight + 'px'}
      width={'100vw'}
    >
      {/* <CssBaseline /> */}
      <AppBarComponent
        appBarHeight={appBarHeight}
        open={drawerOpen}
        onToggle={handleDrawerToggle}
      />
      <SidebarComponent open={drawerOpen} onToggle={handleDrawerToggle} />

      {/* TODO: Create a main component  */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box display="flex" justifyContent="center">
            <Typography variant="h2">rESPonder</Typography>
            <Typography alignSelf="end" fontSize="10px">
              v.2
            </Typography>
          </Box>
          <Typography align="center" fontSize="20px" pt={2} pb={2}>
            An IoT application for disaster rescue scenarios
          </Typography>
        </Box>
        <DeviceStatusComponent />
      </Box>
    </Box>
  );
}

export default App;
