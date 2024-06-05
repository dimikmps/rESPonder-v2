import { Box, Link, Typography } from '@mui/material';

/*
 * Main Footer Component
 **/
const FooterComponent = () => {
  return (
    <Box
      // TODO: Externalise this.
      // height={'63px'}
      sx={{
        marginTop: 'auto',
      }}
      component='footer'
    >
      <Typography
        fontSize='10px'
        textAlign='right'
        color='black'
        height={'100%'}
        alignContent={'end'}
      >
        Created by{' '}
        <Link
          color='inherit'
          underline='none'
          href='https://www.linkedin.com/in/dkampas/'
        >
          Dimitris Kampas
        </Link>
      </Typography>
    </Box>
  );
};
export default FooterComponent;
