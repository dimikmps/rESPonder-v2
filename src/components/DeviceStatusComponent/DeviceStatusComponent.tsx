import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SensorData } from '../../interfaces/SensorData.interface';

/*
 * Temporary component to fetch display sensor data every 5"
 **/
const DeviceStatusComponent = () => {
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
      justifyContent='center'
      width='100%'
      margin='0 auto'
    >
      <Typography
        display='flex'
        justifyContent='center'
        variant='subtitle1'
        fontSize={10}
        fontStyle='italic'
      >
        {!mockData
          ? // TODO: Replace this with a spinner of some sorts
            'Sensor data not loaded...'
          : `${mockData.ts} - Device: ${mockData.id} - Known: ${mockData.kn.length} - Unknown: ${mockData.unk} - RSSI1: ${mockData.kn[0].rssi} - RSSI2: ${mockData.kn[1].rssi}`}
      </Typography>
    </Box>
  );
};

export default DeviceStatusComponent;
