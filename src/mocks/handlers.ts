import { delay, http, HttpResponse } from 'msw';
import { mockResponseModule1, mockResponseModule2 } from './mockResponse';

// TODO: Replace these with dynamic get by id
// TODO: Change these urls to the GH pages equivalents once deployed
export const handlers = [
  // Module 1 sensor data
  http.get('http://localhost:5173/api/v1/module-1', async () => {
    // Wait for 1000ms before responding to make the showcase more realistic
    await delay(1000);

    return HttpResponse.json(mockResponseModule1);
  }),

  // Module 2 sensor data
  http.get('http://localhost:5173/api/v1/module-2', async () => {
    // Wait for 1000ms before responding to make the showcase more realistic
    await delay(1000);

    return HttpResponse.json(mockResponseModule2);
  }),
];
