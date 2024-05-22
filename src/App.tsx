import { Box, Typography } from '@mui/material';
import './App.css';
import Footer from './components/FooterComponent/FooterComponent';

function App() {
   return (
      <Box
         display='flex'
         flexDirection='column'
         justifyContent='space-between'
         height='100vh'
      >
         <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            gap='66px'
            height='100%'
         >
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
            <Typography display='flex' justifyContent='center' fontSize='20px'>
               An IoT application for disaster rescue scenarios
            </Typography>
         </Box>
         <Footer />
      </Box>
   );
}

export default App;
