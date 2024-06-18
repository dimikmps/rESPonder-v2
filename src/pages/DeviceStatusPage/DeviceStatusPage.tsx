import { useEffect, useState } from 'react';
import { SensorData } from '../../interfaces/SensorData.interface';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

/**
 * Device status page
 * Displays sensor data fetch every 5"
 * @returns {JSX.Element} - The DeviceStatusPage JSX element.
 */
const DeviceStatusPage = (): JSX.Element => {
  const [mockData, setMockData] = useState<SensorData[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: Add id setting by context provider
        // TODO: Add error boundary
        const response = await fetch('http://localhost:5173/api/v1/sensor/1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMockData((prevArray) => [data, ...prevArray]);
      } catch (error) {
        // TODO: Create an error boundary instead
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    // TODO: Add Context containing which sensor is currently selected. Will work in conjunction with updated GET method in MSW
    <PageTemplateComponent pageTitle='Sensor data streaming'>
      {!mockData || mockData.length == 0 ? (
        // TODO: Add a spinner or something
        <Typography alignContent={'center'} textAlign={'inherit'} width='100%'>
          Sensor data loading...
        </Typography>
      ) : (
        <List
          disablePadding={true}
          sx={{ maxHeight: '100%', width: '100%', overflow: 'auto' }}
        >
          {mockData.map((mockDataItem, index) => {
            return (
              <ListItem
                key={index}
                // TODO: Add proper styling and color through theme
                sx={{ borderBottom: `1px solid lightgrey` }}
              >
                {/* TODO: Add the proper data to be displayed. */}
                <ListItemText primary={`Reading taken: ${mockDataItem.ts}`} />
                <ListItemText
                  secondary={`Known devices: ${mockDataItem.kn.length}`}
                />
                <ListItemText
                  secondary={`Unknown devices: ${mockDataItem.unk}`}
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
