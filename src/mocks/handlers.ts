import { delay, http, HttpResponse } from 'msw';
import generateMockDeviceStatusData from '../utils/generateMockDeviceStatusData';
import generateMockLocationData from '../utils/generateMockLocationData';
import generateMockProximityData from '../utils/generateMockProximityData';

// TODO: Change these urls to the GH pages equivalents once deployed
export const handlers = [
  // Return sensor stream data for a selected sensor
  http.get('http://localhost:5173/api/v1/sensor/:id', async (req) => {
    const { id } = req.params; // Extract id from request params

    // Wait for 1000ms before responding to make the showcase more realistic
    await delay(1000);

    return HttpResponse.json(
      generateMockDeviceStatusData(Array.isArray(id) ? id[0] : id),
    );
  }),

  // Get coordinates data for all sensors
  http.get('http://localhost:5173/api/v1/locations', async () => {
    // Wait for 333ms before responding to make the showcase more realistic
    await delay(333);
    return HttpResponse.json(generateMockLocationData());
  }),

  // Get proximity data for a selected sensor
  http.get('http://localhost:5173/api/v1/proximity/:id', async (req) => {
    const { id } = req.params; // Extract id from request params

    // Wait for 333ms before responding to make the showcase more realistic
    await delay(333);
    return HttpResponse.json(
      generateMockProximityData(Array.isArray(id) ? id[0] : id),
    );
  }),
];
