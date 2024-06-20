import { useTheme } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

/**
 * Map Page View
 * @returns {JSX.Element} - The HomePageComponent JSX element.
 */
const MapPage = (): JSX.Element => {
  const theme = useTheme();

  const [contentHeight, setContentHeight] = useState<string>('100px');

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current && setContentHeight(ref.current.offsetHeight + 'px');
  }, [ref.current]);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      textAlign={'center'}
      width='100%'
      height='100%'
      p={theme.spacing(3)}
      gap={3}
    >
      <Typography ref={ref} variant='h4'>
        Map View
      </Typography>

      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: `calc(100vh - ${contentHeight})`, width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapPage;
