import { Box, Link, Typography } from '@mui/material';

/*
 * Footer Component
 **/
const FooterComponent = () => {
   return (
      <Box display='flex' flexDirection='column' justifyContent='center' width='100%' margin='0 auto'>
         <Typography fontSize='10px' textAlign='right' color='white'>
            Copyright{' '}
            <Link color='inherit' underline='none' href='https://www.linkedin.com/in/dkampas/'>
               Dimitris Kampas
            </Link>
         </Typography>
      </Box>
   );
};
export default FooterComponent;
