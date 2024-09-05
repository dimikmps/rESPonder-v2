import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { SensorContext } from '../../contexts/SensorContext';
import { SensorLocationDataType } from '../../interfaces/SensorLocationData.interface';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

/**
 * Map Page View
 * When no sensor is selected from the main dropdown, shows all the sensors currently deployed
 * When a specific sensor is selected, shows the centralised node along with the selected sensor
 * @returns {JSX.Element} - The HomePageComponent JSX element.
 */
const MapPage = (): JSX.Element => {
  const theme = useTheme();

  const [contentHeight, setContentHeight] = useState<string>('100px');

  const navigate = useNavigate();

  // Trigger a redirection to the clicked sensor, while also changing the currently active sensor in the context
  const handleOnClick = (event: React.MouseEvent) => {
    const newSensorSelection = String((event.target as HTMLLinkElement).id);

    // Change the context only if the sensor is not already selected
    if (selectedSensor !== newSensorSelection)
      setSelectedSensor(newSensorSelection || '');

    navigate('/status');
  };

  const selectedSensorContext = useContext(SensorContext);

  if (!selectedSensorContext) {
    throw new Error('There was something wrong with the Sensor Provider');
  }

  const { selectedSensor, setSelectedSensor } = selectedSensorContext;

  const [mockLocationData, setMockLocationData] = useState<
    SensorLocationDataType[]
  >([]);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(`http://localhost:5173/api/v1/locations/`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMockLocationData(data);
      } catch (err) {
        // Do nothing
      }
    };

    fetchLocationData();
  }, []);

  useEffect(() => {
    ref.current && setContentHeight(ref.current.offsetHeight + 'px');
  }, [ref.current]);

  const populateMapWithMarkers = (id?: string) => {
    // Return all locations if no ID is given
    if (!id || id == '') {
      return (
        mockLocationData &&
        mockLocationData.length > 0 &&
        mockLocationData.map((mockSensorItem, index) => {
          return (
            <Marker
              key={`marker-${index}`}
              position={mockSensorItem.coordinates}
            >
              <Popup>
                <div>
                  {' '}
                  {index == 0 ? (
                    mockSensorItem.designation
                  ) : (
                    <a id={mockSensorItem.id} onClick={handleOnClick}>
                      {mockSensorItem.designation}
                    </a>
                  )}
                  : {(mockSensorItem.coordinates as [number, number])[0]}N -{' '}
                  {(mockSensorItem.coordinates as [number, number])[1]}W
                </div>
              </Popup>
            </Marker>
          );
        })
      );
    } else {
      return (
        mockLocationData &&
        mockLocationData.length > 0 && (
          <>
            <Marker key={`marker-0`} position={mockLocationData[0].coordinates}>
              <Popup>
                <div>
                  {mockLocationData[0].designation}:{' '}
                  {(mockLocationData[0].coordinates as [number, number])[0]}N -{' '}
                  {(mockLocationData[0].coordinates as [number, number])[1]}W
                </div>
              </Popup>
            </Marker>

            {mockLocationData[Number(selectedSensor)] && (
              <Marker
                key={selectedSensor}
                position={mockLocationData[Number(selectedSensor)].coordinates}
              >
                <Popup>
                  <div>
                    <a
                      id={mockLocationData[Number(selectedSensor)].id}
                      onClick={handleOnClick}
                    >
                      {mockLocationData[Number(selectedSensor)].designation}
                    </a>
                    :{' '}
                    {
                      (
                        mockLocationData[Number(selectedSensor)]
                          .coordinates as [number, number]
                      )[0]
                    }
                    N -{' '}
                    {
                      (
                        mockLocationData[Number(selectedSensor)]
                          .coordinates as [number, number]
                      )[1]
                    }
                    W
                  </div>
                </Popup>
              </Marker>
            )}
          </>
        )
      );
    }
  };

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

      {/* TODO: Add a spinner or something */}
      {mockLocationData && mockLocationData.length > 0 && (
        <MapContainer
          center={[39.9417, 23.6628]}
          zoom={13}
          minZoom={7}
          scrollWheelZoom={true}
          style={{ height: `calc(100vh - ${contentHeight})`, width: '100wh' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Circle center={[39.9417, 23.6628]} fillColor='grey' radius={6000} />
          <Circle center={[39.9417, 23.6628]} fillColor='blue' radius={25} />
          {populateMapWithMarkers(selectedSensor)}
        </MapContainer>
      )}
    </Box>
  );
};

export default MapPage;
