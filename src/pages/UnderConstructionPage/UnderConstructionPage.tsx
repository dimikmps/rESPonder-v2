import { Box, Typography } from '@mui/material';

interface UnderConstructionComponentProps {
  page: string;
}

/**
 * Under-construction component
 * Returns an under-construction page for the duration of developing the different views
 * @param {string} page - The page which the under-construction status refers to.
 * @returns {JSX.Element} - The UnderConstructionComponent JSX element.
 */
const UnderConstructionPage = ({
  page,
}: UnderConstructionComponentProps): JSX.Element => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      width='100%'
    >
      <Typography textAlign='center' variant='h5'>
        {page}
      </Typography>
      <Typography textAlign='center' variant='h6'>
        Under construction
      </Typography>
    </Box>
  );
};

export default UnderConstructionPage;
