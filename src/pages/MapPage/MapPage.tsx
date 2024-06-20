import { useTheme } from '@mui/material/styles';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  //   Polyline,
} from 'react-leaflet';
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

  // Calculate distance to draw a radius-based line from the center of the circle to its periphery
  //   const earthRadius = 6378.137; //radius of the earth in kilometer
  //   const pi = Math.PI;
  //   const degreeConversion = 1 / (((2 * pi) / 360) * earthRadius) / 1000; //1 meter in degree
  //   // TODO: Add this dynamically
  //   const newLatitude = 23.6628 + 7800 * degreeConversion;

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
        center={[39.9417, 23.6628]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: `calc(100vh - ${contentHeight})`, width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={[39.9417, 23.6628]} fillColor='grey' radius={6000} />
        68
        <Circle center={[39.9417, 23.6628]} fillColor='blue' radius={25} />
        {/* <Polyline
          positions={[
            [39.9417, 23.6628],
            [39.9417, newLatitude],
          ]}
        /> */}
        <Marker position={[39.9417, 23.6628]}>
          <Popup>
            <div>Centralised Node - Town Hall</div>
          </Popup>
        </Marker>
        <Marker position={[39.9594, 23.6837]}>
          <Popup>
            <div>Sensor 1 - [39.9594, 23.6837]</div>
          </Popup>
        </Marker>
        <Marker position={[39.93045, 23.72228]}>
          <Popup>
            <div>Sensor 2 - [39.93045, 23.72228]</div>
          </Popup>
        </Marker>
        <Marker position={[39.9569, 23.6242]}>
          <Popup>
            <div>Sensor 3 - [39.9569, 23.6242]</div>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapPage;
