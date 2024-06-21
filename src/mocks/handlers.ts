import { delay, http, HttpResponse } from 'msw';
import generateMockResponse from '../utils/generateMockResponse';
import generateMockLocationData from '../utils/generateMockLocationData';

// TODO: Change these urls to the GH pages equivalents once deployed
export const handlers = [
  // Get per-ID sensor data
  http.get('http://localhost:5173/api/v1/sensor/:id', async (req) => {
    const { id } = req.params; // Extract id from request params

    // Wait for 1000ms before responding to make the showcase more realistic
    await delay(1000);

    // Return an HTTP response out of the mocked data
    return HttpResponse.json(
      // Handle only a single query param, for the time being
      generateMockResponse(Array.isArray(id) ? id[0] : id),
    );
  }),

  // Get coordinates data for all sensors
  http.get('http://localhost:5173/api/v1/sensor-locations', async () => {
    // Wait for 333ms before responding to make the showcase more realistic
    await delay(333);
    return HttpResponse.json(generateMockLocationData());
  }),
];
