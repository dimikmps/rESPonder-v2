import { delay, http, HttpResponse } from 'msw';
import { generateMockResponse } from '../utils/generateMockResponse';

// TODO: Replace these with dynamic get by id
// TODO: Change these urls to the GH pages equivalents once deployed
export const handlers = [
  // Module sensor data
  http.get('http://localhost:5173/api/v1/module', async () => {
    // Wait for 1000ms before responding to make the showcase more realistic
    await delay(1000);

    // Return an HTTP response out of the mocked data
    return HttpResponse.json(generateMockResponse());
  }),
];
