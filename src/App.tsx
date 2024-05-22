import { Box, Typography } from '@mui/material';
import './App.css';

function App() {
   return (
      <>
         <Box display='flex' flexDirection='column' justifyContent='space-between' height='33vh'>
            <Box display='flex' justifyContent='center'>
               <Typography variant='h2' display='flex' flexDirection='column' justifyContent='flex-end'>
                  rESPonder
               </Typography>
               <Typography
                  display='flex'
                  flexDirection='column'
                  justifyContent='flex-end'
                  height='100%'
                  fontSize='10px'
               >
                  v.2
               </Typography>
            </Box>
            <h2>An IoT application for disaster rescue scenarios</h2>
         </Box>
      </>
   );
}

export default App;
