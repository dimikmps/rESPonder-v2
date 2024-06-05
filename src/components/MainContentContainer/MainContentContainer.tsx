import { Box, Typography } from '@mui/material';
import DeviceStatusComponent from '../DeviceStatusComponent/DeviceStatusComponent';

/*
 * Main Content Component
 **/
const MainContentContainer = () => {
  return (
    <Box
      component='main'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      height='100%'
      width='100%'
      overflow='auto'
    >
      <Box display='flex' justifyContent='center' width={'100%'}>
        <Typography variant='h2'>rESPonder</Typography>
        <Typography alignSelf='end' fontSize='10px'>
          v.2
        </Typography>
      </Box>
      <Typography align='center' fontSize='20px' pt={2} pb={2} width={'100%'}>
        An IoT application for disaster rescue scenarios
      </Typography>
      <DeviceStatusComponent />
    </Box>
  );
};
export default MainContentContainer;
