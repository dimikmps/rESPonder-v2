import { SensorData } from '../interfaces/SensorData.interface';

/*
 * Generates random (but sensible) sensor-derived data, to be returned by the MSW
 **/
const generateRandomNumberInRange = (min: number, max: number) => {
  const result = String(Math.floor(Math.random() * (max - min + 1)) + min);

  return result;
};

// Currently supports up to 3 mock responses (i.e. 3 devices) for the presentation purposes
export const generateMockResponse = (id: string): SensorData | [] => {
  if (Number(id) > 3) {
    return [];
  }

  return {
    id: String(id),
    unk:
      id == '1'
        ? generateRandomNumberInRange(18, 20)
        : id == '2'
          ? generateRandomNumberInRange(2, 3)
          : generateRandomNumberInRange(9, 10),
    kn:
      id == '1'
        ? [
            {
              dev: 'Despoina',
              rssi: '-' + generateRandomNumberInRange(50, 60),
            },
            {
              dev: 'Dimitris',
              rssi: '-' + generateRandomNumberInRange(60, 70),
            },
          ]
        : id == '2'
          ? [
              {
                dev: 'Elias',
                rssi: '-' + generateRandomNumberInRange(45, 50),
              },
            ]
          : [],
    ts: new Date().toLocaleString('en-GB'),
  };
};
