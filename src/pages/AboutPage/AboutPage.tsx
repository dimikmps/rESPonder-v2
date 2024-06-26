import { useContext, useEffect } from 'react';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';
import { SensorContext } from '../../contexts/SensorContext';
import { Box, List, ListItem, Typography, useTheme } from '@mui/material';

/**
 * About page
 * Generates the about page
 * @returns {JSX.Element} - The AboutPage JSX element.
 */
const AboutPage: React.FC = () => {
  const theme = useTheme();

  const selectedSensorContext = useContext(SensorContext);

  if (!selectedSensorContext) {
    throw new Error('There was something wrong with the Sensor Provider');
  }

  const { setSelectedSensor } = selectedSensorContext;

  // Reset selected sensor when visiting the contact page
  useEffect(() => {
    setSelectedSensor('');
  }, [setSelectedSensor]);

  return (
    <PageTemplateComponent pageTitle='About'>
      <Box
        width='100%'
        height='50%'
        p={theme.spacing(8)}
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
      >
        <Typography align='left'>
          This application provides sensor-derived data to assist in locating
          potential survivors under earthquake-induced rubble. It is organized
          into three main sections:
        </Typography>
        <List sx={{ listStyleType: 'disc', paddingX: theme.spacing(3) }}>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography sx={{ fontWeight: '600' }}>Map View</Typography>
            <Typography variant='subtitle2'>
              Displays the current locations of sensors deployed in the
              Paliouri, Chalkidiki (GR) area. You can view all deployed sensors
              or select a specific one from the main dropdown menu. The central
              node, located on a government building, is always visible on the
              map and relays sensor data from nearby areas to the cloud-based
              (AWS) back-end service. The displayed range corresponds to a 6km
              radius, the optimal LoRa communication range.
            </Typography>
            <Typography variant='subtitle2'>
              Clicking on each sensor in the vicinity provides additional
              information such as its coordinates and a link to its streaming
              data page.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography sx={{ fontWeight: '600' }}>
              Latest Sensor Readings
            </Typography>
            <Typography variant='subtitle2'>
              Provides real-time streaming data from sensors, including the
              number of registered and unregistered devices near the selected
              sensor.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <Box display='flex' flexDirection='row' alignItems='center'>
              <Typography sx={{ fontWeight: '600' }}>
                Device Proximity
              </Typography>
              <Typography sx={{ fontSize: '9px', marginLeft: '5px' }}>
                (experimental)
              </Typography>
            </Box>
            <Typography variant='subtitle2'>
              Displays RSSI-based proximity data calculated by AWS Lambda every
              five seconds. This includes information about pre-registered
              devices near each sensor and offers sorting capabilities through
              an underlying table to help identify the closest registered
              devices (and potential users) in the area.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </PageTemplateComponent>
  );
};

export default AboutPage;
