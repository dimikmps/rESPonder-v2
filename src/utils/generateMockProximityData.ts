import {
  ProximityData,
  UserDeviceData,
} from '../interfaces/ProximityData.interface';

// Generates random (but sensible) sensor-derived data, to be returned by the MSW
const generateRandomNumberInRange = (min: number, max: number): string => {
  const result = String(Math.floor(Math.random() * (max - min + 1)) + min);

  return result;
};

// Generates a hash-like ID
const generateRandomString = (hashLength: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < hashLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Generate a unique hash-like userID
const user1 = generateRandomString(10);
const user2 = generateRandomString(10);
const user3 = generateRandomString(10);
const user4 = generateRandomString(10);

// Generate mock distances for 4 fictional users
const generateUser1Distances = (): UserDeviceData => {
  return {
    deviceId: user1,
    deviceAlias: 'Dimitris',
    d1: generateRandomNumberInRange(1.33, 2.33),
    d2: generateRandomNumberInRange(3.21, 4.71),
    d3: generateRandomNumberInRange(4.61, 5.75),
  };
};

const generateUser2Distances = (): UserDeviceData => {
  return {
    deviceId: user2,
    deviceAlias: 'Despoina',
    d1: generateRandomNumberInRange(0.33, 1.33),
    d2: generateRandomNumberInRange(2.11, 3.64),
    d3: '',
  };
};

const generateUser3Distances = (): UserDeviceData => {
  return {
    deviceId: user3,
    deviceAlias: 'Elias',
    d1: '',
    d2: '',
    d3: generateRandomNumberInRange(10.56, 14.22),
  };
};

const generateUser4Distances = (): UserDeviceData => {
  return {
    deviceId: user4,
    deviceAlias: 'Kate',
    d1: '',
    d2: generateRandomNumberInRange(8.56, 9.22),
    d3: generateRandomNumberInRange(10.56, 14.22),
  };
};

// Generate mock data for each sensor
const generateUserProximityData = (id: string): UserDeviceData[] => {
  switch (id) {
    case '1':
      return [generateUser1Distances(), generateUser2Distances()];
    case '2':
      return [
        generateUser2Distances(),
        generateUser3Distances(),
        generateUser4Distances(),
      ];
    case '3':
      return [
        generateUser1Distances(),
        generateUser3Distances(),
        generateUser4Distances(),
      ];
    default:
      return [];
  }
};

/**
 * generateMockResponse
 * Generates a mock response for a sensor
 * Currently supports up to 3 different mock responses (i.e. 3 devices) for presentation purposes
 * Currently also incorporates 4 mock users registered to the system
 * @returns {SensorData} - Mock data for a single sensor
 */
const generateMockResponse = (id: string): ProximityData | [] => {
  if (Number(id) > 3) {
    return [];
  }

  const result = {
    id: id,
    userDevices: generateUserProximityData(id),
    ts: new Date().toLocaleString('en-GB'),
  };

  return result;
};

export default generateMockResponse;
