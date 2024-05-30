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
