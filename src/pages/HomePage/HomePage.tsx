import { Box, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { SensorContext } from '../../contexts/SensorContext';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';

/**
 * Homepage View
 * @returns {JSX.Element} - The HomePageComponent JSX element.
 */
const HomePage = (): JSX.Element => {
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
    <PageTemplateComponent>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
        width='100%'
      >
        <Box display='flex' justifyContent='center' width='100%'>
          <Typography variant='h2'>rESPonder</Typography>
          <Typography alignSelf='end' fontSize='10px'>
            v.2
          </Typography>
        </Box>
        <Typography align='center' fontSize='20px' pt={2} pb={2} width={'100%'}>
          An IoT application for disaster rescue scenarios
        </Typography>
      </Box>
    </PageTemplateComponent>
  );
};

export default HomePage;
