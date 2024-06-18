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
 * Displays sensor data fetch every 5"
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
    setMockData([]);

    const fetchData = async () => {
      if (selectedSensor !== '')
        try {
          const response = await fetch(
            `http://localhost:5173/api/v1/sensor/${selectedSensor}`,
          );
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setMockData((prevArray) => [data, ...prevArray]);
        } catch (error) {
          console.error('Error fetching data');
        }
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [selectedSensor]);

  return (
    <PageTemplateComponent pageTitle='Sensor data streaming'>
      {!mockData || mockData.length == 0 ? (
        !selectedSensor ? (
          <Typography
            alignContent={'center'}
            textAlign={'inherit'}
            width='100%'
          >
            Please select a sensor to continue
          </Typography>
        ) : (
          // TODO: Add a spinner or something
          <Typography
            alignContent={'center'}
            textAlign={'inherit'}
            width='100%'
          >
            Sensor data loading...
          </Typography>
        )
      ) : (
        <List
          disablePadding={true}
          sx={{ maxHeight: '100%', width: '100%', overflow: 'auto' }}
        >
          {mockData.map((mockDataItem, index) => {
            return (
              <ListItem
                key={index}
                sx={{ borderBottom: `1px solid lightgrey` }}
              >
                <ListItemText
                  primary={`Reading taken: ${mockDataItem.ts}`}
                  sx={{ textAlign: 'left' }}
                />
                <ListItemText
                  secondary={`Known devices: ${mockDataItem.kn.length}`}
                  sx={{ textAlign: 'center' }}
                />
                <ListItemText
                  secondary={`Unknown devices: ${mockDataItem.unk}`}
                  sx={{ textAlign: 'right' }}
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
