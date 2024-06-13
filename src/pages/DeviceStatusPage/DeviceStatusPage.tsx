import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SensorData } from '../../interfaces/SensorData.interface';

/**
 * Device status page
 * Displays sensor data fetch every 5"
 * @returns {JSX.Element} - The DeviceStatusPage JSX element.
 */
const DeviceStatusPage = (): JSX.Element => {
  const [mockData, setMockData] = useState<SensorData | null>(null);

  useEffect(() => {
    // Fetch data every 5sec
    const interval = setInterval(() => {
      fetch('http://localhost:5173/api/v1/module')
        .then((res) => res.json())
        .then((res) => {
          setMockData(res);
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      textAlign={'center'}
      width='100%'
      margin='0 auto'
    >
      {/* TODO: Move title on top. */}
      {/* TODO: Make page prototype for all pages to follow */}
      <Typography variant='h4'>Sensor data streaming</Typography>
      <Typography variant='subtitle1' fontSize={10} fontStyle='italic'>
        {!mockData
          ? // TODO: Replace this with a spinner of some sorts
            'Sensor data loading...'
          : `${mockData.ts} - Device: ${mockData.id} - Known: ${mockData.kn.length} - Unknown: ${mockData.unk} - RSSI1: ${mockData.kn[0].rssi} - RSSI2: ${mockData.kn[1].rssi}`}
      </Typography>
    </Box>
  );
};

export default DeviceStatusPage;
