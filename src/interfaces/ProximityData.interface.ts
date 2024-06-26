export interface UserDeviceData {
    deviceId: string;
    deviceAlias: string;
    d1: string;
    d2: string;
    d3: string;
  }


export interface ProximityData {
  id: string;
  userDevices: UserDeviceData[];
  ts: string;
}
