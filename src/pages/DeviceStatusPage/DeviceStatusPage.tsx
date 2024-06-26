import { useContext, useEffect, useState } from 'react';
import { SensorData } from '../../interfaces/SensorData.interface';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { SensorContext } from '../../contexts/SensorContext';

/**
 * Device status page
 * Displays sensor data fetch every second
 * @returns {JSX.Element} - The DeviceStatusPage JSX element.
 */
const DeviceStatusPage = (): JSX.Element => {
  const selectedSensorContext = useContext(SensorContext);

  if (!selectedSensorContext) {
    throw new Error('There was something wrong with the Sensor Provider');
  }

  const { selectedSensor } = selectedSensorContext;

  const [mockData, setMockData] = useState<SensorData[] | []>([]);

  useEffect(() => {
    // Clear previous data
    setMockData([]);

    if (selectedSensor !== '') {
      // Utilise abort signal to immediately stop any fetching once the sensor is switched
      const fetchData = async (signal: AbortSignal) => {
        try {
          const response = await fetch(
            `http://localhost:5173/api/v1/sensor/${selectedSensor}`,
            { signal },
          );
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setMockData((prevArray) => [data, ...prevArray]);
        } catch (err) {
          // Do nothing
        }
      };

      const controller = new AbortController();
      const signal = controller.signal;

      // Initial fetch
      fetchData(signal);

      // Set up interval to fetch data every second
      const interval = setInterval(() => fetchData(signal), 1000);

      // Clean up: abort fetch and clear interval on component unmount or if selectedSensor changes
      return () => {
        controller.abort();
        clearInterval(interval);
      };
    }
  }, [selectedSensor]);

  return (
    <PageTemplateComponent pageTitle='Latest Sensor Readings'>
      {!selectedSensor || selectedSensor == '' ? (
        <Typography alignContent={'center'} textAlign={'inherit'} width='100%'>
          Please select a sensor to continue
        </Typography>
      ) : !mockData || mockData.length == 0 ? (
        // TODO: Add a spinner or something
        <Typography alignContent={'center'} textAlign={'inherit'} width='100%'>
          Sensor data loading...
        </Typography>
      ) : (
        <List
          disablePadding={true}
          sx={{ maxHeight: '100%', width: '100%', overflow: 'auto' }}
        >
          <ListItem key={'header'} sx={{ borderBottom: `1px solid lightgrey` }}>
            <ListItemText
              primary={`Reading timestamp`}
              sx={{ width: '33%', textAlign: 'center' }}
            />
            <ListItemText
              primary={`Known Devices`}
              sx={{ width: '33%', textAlign: 'center' }}
            />
            <ListItemText
              primary={`Unknown Devices`}
              sx={{ width: '33%', textAlign: 'center' }}
            />
          </ListItem>
          {mockData.map((mockDataItem, index) => {
            return (
              <ListItem
                key={index}
                sx={{ borderBottom: `1px solid lightgrey` }}
              >
                <ListItemText
                  secondary={mockDataItem.ts}
                  sx={{ width: '33%', textAlign: 'center' }}
                />
                <ListItemText
                  secondary={mockDataItem.kn.length}
                  sx={{ width: '33%', textAlign: 'center' }}
                />
                <ListItemText
                  secondary={mockDataItem.unk}
                  sx={{ width: '33%', textAlign: 'center' }}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </PageTemplateComponent>
  );
};

export default DeviceStatusPage;
