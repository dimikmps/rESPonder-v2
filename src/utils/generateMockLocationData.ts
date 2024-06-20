import { SensorLocationDataType } from '../interfaces/SensorLocationData.interface';

/**
 * generateMockLocationData
 * Generates a mock response for the location of all sensors
 * Currently returns coordinates for the centralised node and the 3 deployed sensing nodes
 * @returns {LatLngExpression[]} - Mock location array
 */
const generateMockLocationData = (): SensorLocationDataType[] => {
  return [
    {
      id: '0',
      coordinates: [39.9417, 23.6628],
      designation: ' Town Hall (Central Node)',
    },
    {
      id: '1',
      coordinates: [39.9594, 23.6837],
      designation: 'Sensor 1',
    },
    {
      id: '2',
      coordinates: [39.93045, 23.72228],
      designation: 'Sensor 2',
    },
    {
      id: '3',
      coordinates: [39.9569, 23.6242],
      designation: 'Sensor 3',
    },
  ];
};

export default generateMockLocationData;
