import {
  ProximityData,
  UserDeviceData,
} from '../interfaces/ProximityData.interface';

// Generates random (but sensible) sensor-derived data, to be returned by the MSW
const generateRandomNumberInRange = (min: number, max: number): string => {
  const result = String(Math.floor(Math.random() * (max - min + 1)) + min);

  return result;
};

function generateRandomString(hashLength: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < hashLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const user1 = generateRandomString(10);
const user2 = generateRandomString(10);
const user3 = generateRandomString(10);

const generateUser1Distances = (): UserDeviceData => {
  return {
    deviceId: user1,
    deviceAlias: 'Dimitris',
    d1: generateRandomNumberInRange(1.33, 2.33),
    d2: generateRandomNumberInRange(3.21, 4.71),
    d3: generateRandomNumberInRange(4.61, 5.75),
  };
};

const generateUser2Distances = () => {
  return {
    deviceId: user2,
    deviceAlias: 'Despoina',
    d1: generateRandomNumberInRange(0.33, 1.33),
    d2: generateRandomNumberInRange(2.11, 3.64),
    d3: '',
  };
};

const generateUser3Distances = () => {
  return {
    deviceId: user3,
    deviceAlias: 'Elias',
    d1: '',
    d2: '',
    d3: generateRandomNumberInRange(10.56, 14.22),
  };
};

/**
 * generateMockResponse
 * Generates a mock response for a sensor
 * Currently supports up to 3 different mock responses (i.e. 3 devices) for presentation purposes
 * @returns {SensorData} - Mock data for a single sensor
 */
const generateMockResponse = (id: string): ProximityData | [] => {
  if (Number(id) > 3) {
    return [];
  }

  const result = {
    id: String(id),
    userDevices:
      id == '1'
        ? [generateUser1Distances(), generateUser2Distances()]
        : id == '2'
          ? [generateUser1Distances(), generateUser2Distances()]
          : [generateUser1Distances(), generateUser3Distances()],
    ts: new Date().toLocaleString('en-GB'),
  };

  return result;
};

export default generateMockResponse;
