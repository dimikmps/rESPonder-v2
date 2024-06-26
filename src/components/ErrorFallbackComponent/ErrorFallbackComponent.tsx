import { Box, Button, Typography } from '@mui/material';
import PageTemplateComponent from '../PageTemplateComponent/PageTemplateComponent';

interface ErrorFallbackComponentProps {
  resetErrorBoundary: () => void;
}

/**
 * Error Fallback COmponent
 * The component displayed when an error is caught within the Error Boundary
 * @param {() => void} resetErrorBoundary  -The action to reset the error state
 * @returns {JSX.Element} - The ErrorFallbackComponent JSX element.
 */
const ErrorFallbackComponent = ({
  resetErrorBoundary,
}: ErrorFallbackComponentProps) => {
  return (
    <PageTemplateComponent pageTitle='Oops...'>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
        alignItems='center'
        width='100%'
        height='50%'
      >
        <Typography>Something went wrong</Typography>
        <Button
          variant='outlined'
          onClick={resetErrorBoundary}
          sx={{ maxWidth: '150px' }}
        >
          Try again
        </Button>
      </Box>
    </PageTemplateComponent>
  );
};

export default ErrorFallbackComponent;
