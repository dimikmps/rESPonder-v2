import { Box, Typography } from '@mui/material';

/**
 * Homepage component
 * Returns content based on the url/routing
 * @returns {JSX.Element} - The HomePageComponent JSX element.
 */
const HomePageComponent = (): JSX.Element => {
  return (
    <>
      <Box display='flex' justifyContent='center' width='100%'>
        <Typography variant='h2'>rESPonder</Typography>
        <Typography alignSelf='end' fontSize='10px'>
          v.2
        </Typography>
      </Box>
      <Typography align='center' fontSize='20px' pt={2} pb={2} width={'100%'}>
        An IoT application for disaster rescue scenarios
      </Typography>
    </>
  );
};

export default HomePageComponent;
