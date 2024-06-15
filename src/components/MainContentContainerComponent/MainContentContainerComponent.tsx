import { Box } from '@mui/material';

interface MainContentContainerComponentProps {
  routeComponent: React.JSX.Element;
}

/**
 * Main Content Container
 * Returns content based on the url/routing
 * @param {React.JSX.Element} routeComponent - The component/view to be returned.
 * @returns {JSX.Element} - The MainContentContainerComponent JSX element, wrapping component provided by the router.
 */
const MainContentContainerComponent = ({
  routeComponent,
}: MainContentContainerComponentProps): React.JSX.Element => {
  // const theme = useTheme();

  return (
    <Box
      component='main'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      height='100%'
      width='100%'
      overflow='auto'
      // Use/override this to force padding on the right of the main content area (i.e. each routable page)
      // Aligns each page's content to the center, as per the sidebar that is rendered on the left
      // pr={theme.custom.sidebarClosedWidth}
    >
      {routeComponent}
    </Box>
  );
};

export default MainContentContainerComponent;
