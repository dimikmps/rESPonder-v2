import { Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface AppContainerComponentProps {
  children: ReactNode;
}

/**
 * App Container Component
 * @returns {JSX.Element} - The AppContainerComponent JSX element.
 */
const AppContainerComponent = ({
  children,
}: AppContainerComponentProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      display='flex'
      flexDirection='column'
      mt={theme.custom.appBarHeight}
      ml={theme.custom.sidebarClosedWidth}
      height={`calc(100vh - ${theme.custom.appBarHeight})`}
      width={`calc(100vw -  ${theme.custom.sidebarClosedWidth})`}
      overflow='hidden'
      position='relative'
    >
      {children}
    </Box>
  );
};

export default AppContainerComponent;
