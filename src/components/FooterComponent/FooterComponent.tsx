import { Box, Link, Typography } from '@mui/material';

/**
 * Footer component
 * @returns {JSX.Element} - The FooterComponent JSX element.
 */
const FooterComponent = (): JSX.Element => {
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
