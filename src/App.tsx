import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import FooterComponent from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import './App.css';
import { SensorData } from './mocks/mockResponse';

function App() {
  const [mockData, setMockData] = useState<SensorData[] | null>(null);

  // TODO: Remove this from here - Tests msw mocking functionality
  useEffect(() => {
    fetch('http://localhost:5173/api/v1/module-1')
      .then((res) => res.json())
      .then((res) => {
        setMockData(res);
      });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <HeaderComponent />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="66px"
        height="100%"
      >
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h2"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            rESPonder
          </Typography>
          <Typography
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            height="100%"
            fontSize="10px"
          >
            v.2
          </Typography>
        </Box>
        <Typography display="flex" justifyContent="center" fontSize="20px">
          An IoT application for disaster rescue scenarios
        </Typography>
        {/* TODO: Replace/remove this once a proper loading modal and view/component have been implemented*/}
        <Typography
          display="flex"
          justifyContent="center"
          variant="subtitle1"
          fontSize={10}
          fontStyle="italic"
        >
          {!mockData
            ? 'Sensor data not loaded...'
            : 'Sensor 1 data sucessfully loaded!'}
        </Typography>
      </Box>
      <FooterComponent />
    </Box>
  );
}

export default App;
