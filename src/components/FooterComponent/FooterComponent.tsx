import { Box, Typography } from '@mui/material';

const Footer = () => {
   return (
      <Box
         display='flex'
         flexDirection='column'
         justifyContent='center'
         width='100%'
         margin='0 auto'
      >
         <Typography fontSize={'8px'} textAlign='right' color='white'>
            Copyright Dimi
         </Typography>
      </Box>
   );
};
export default Footer;
