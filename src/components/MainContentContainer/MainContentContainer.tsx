import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

interface MainContentProps {
  children: ReactElement[];
}

/*
 * Main Content Component
 **/
const MainContentContainer = ({ children }: MainContentProps) => {
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
      {children.map((child, index) => {
        return <React.Fragment key={index}>{child}</React.Fragment>;
      })}
    </Box>
  );
};
export default MainContentContainer;
