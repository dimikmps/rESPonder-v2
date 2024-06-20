import { LatLngExpression } from 'leaflet';

export interface SensorLocationDataType {
  id: string;
  coordinates: LatLngExpression;
  designation?: string;
}
