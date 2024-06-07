import { SensorData } from '../interfaces/SensorData.interface';

/*
 * Generates random (but sensible) sensor-derived data, to be returned by the MSW
 **/
const generateRandomNumberInRange = (min: number, max: number) => {
  const result = String(Math.floor(Math.random() * (max - min + 1)) + min);

  return result;
};

// TODO: Alter this in order to accommodate for different devices (i.e. not only device-1)
export const generateMockResponse = (): SensorData => {
  const mockResponse = {
    id: '1',
    unk: generateRandomNumberInRange(18, 20),
    kn: [
      {
        dev: 'Despoina',
        rssi: '-' + generateRandomNumberInRange(50, 60),
      },
      {
        dev: 'Dimitris',
        rssi: '-' + generateRandomNumberInRange(60, 70),
      },
    ],
    ts: new Date().toLocaleString(),
  };

  return mockResponse;
};
