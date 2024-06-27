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
        height='100%'
        px={theme.spacing(8)}
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
              This section displays the current locations of sensors deployed in
              the Paliouri, Chalkidiki (GR) area, which was selected for the
              experimental deployment in the original implementation. Users can
              view all deployed sensors or select a specific one from the main
              dropdown menu.
              <Typography variant='subtitle2'>
                A central node, located on a government building, is always
                visible on the map. This node relays sensor data from nearby
                areas to the cloud-based (AWS) back-end service. The blue circle
                on the map represents a 6km radius, indicating the optimal LoRa
                communication range.
              </Typography>
              <Typography variant='subtitle2'>
                Clicking on each sensor icon provides additional information,
                such as its coordinates and a link to the specific sensor&#39;s
                data streaming page.
              </Typography>
              <Typography variant='subtitle2'>
                The main dropdown menu allows users to choose between displaying
                each of the three deployed sensors individually or all sensors
                simultaneously.
              </Typography>
              <Typography variant='subtitle2'>
                Sensor data is retrieved and updated every second.
              </Typography>
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
              This section provides real-time streaming data from the sensors,
              including the number of registered and unregistered devices near
              the selected sensor. Users can choose to display data for a
              specific sensor via the dropdown menu. The data is updated every
              second.
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
              This section displays RSSI-based proximity data, calculated by AWS
              Lambda every five seconds. It includes information about
              pre-registered devices near each sensor and offers sorting
              capabilities through a table to help identify the closest
              registered devices (and potential users) in the area. The
              displayed data is updated every five seconds and corresponds to
              the sensor currently selected via the main dropdown menu. Any
              device present in the selected sensor&#39;s proximity will appear
              in the table.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </PageTemplateComponent>
  );
};

export default AboutPage;
