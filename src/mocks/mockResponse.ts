export interface DeviceProperties {
  dev: string;
  rssi: string;
}

export interface SensorData {
  id: string;
  unk: string;
  kn: DeviceProperties[];
  ts: string;
  cnt?: string;
}

export const mockResponseModule1: SensorData[] = [
  {
    id: '1',
    unk: '18',
    kn: [
      {
        dev: 'Desp-1',
        rssi: '-55',
      },
      {
        dev: 'Dimi-2',
        rssi: '-68',
      },
    ],
    ts: '21-04-24T22:01:01',
    cnt: '4',
  },

  {
    id: '1',
    unk: '18',
    kn: [
      {
        dev: 'Desp-1',
        rssi: '-54',
      },
      {
        dev: 'Dimi-2',
        rssi: '-67',
      },
    ],
    ts: '21-04-24T22:01:11',
    cnt: '4',
  },
];

export const mockResponseModule2 = [
  {
    id: '2',
    unk: '18',
    kn: [
      {
        dev: 'Nel-1',
        rssi: '-55',
      },
    ],
    ts: '21-04-24T22:01:01',
    cnt: '4',
  },
  {
    id: '2',
    unk: '18',
    kn: [
      {
        dev: 'Neli-1',
        rssi: '-56',
      },
    ],
    ts: '21-04-24T22:01:11',
    cnt: '4',
  },
];
