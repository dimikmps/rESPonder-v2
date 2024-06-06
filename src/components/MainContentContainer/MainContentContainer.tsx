import { Box } from '@mui/material';

interface MainContentContainerProps {
  routeComponent: React.JSX.Element;
}

/**
 * Main Content Container
 * Returns content based on the url/routing
 * @param {React.JSX.Element} routeComponent - The component/view to be returned.
 * @returns {JSX.Element} - The MainContentContainer JSX element, wrapping component provided by the router.
 */
const MainContentContainer = ({
  routeComponent,
}: MainContentContainerProps): React.JSX.Element => {
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
      {routeComponent}
    </Box>
  );
};

export default MainContentContainer;
