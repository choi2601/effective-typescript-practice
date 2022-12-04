// 예제 1

interface CameraOptions {
  center?: LngLat;
  zoom?;
  number;
  bearing?: number;
  pitch?: number;
}

// 매개변수의 확장
type LngLat =
  | { lng: number; lat: number }
  | { lon: number; lat: number }
  | [number, number];

declare function setCamera(camera: CameraOptions): void;
declare function viewporForBounds(bounds: LngLatBounds): CacheQueryOptions;

type LngLatBounds =
  | { northeast: LngLat; southwest: LngLat }
  | [LngLat, LngLat]
  | [number, number, number, number];
