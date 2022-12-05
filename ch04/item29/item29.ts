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
// 매개변수 타입의 범위가 넓으면 사용하기 편리하지만, 반환 타입의 범위가 넓으면 사용하기 불편
declare function viewporForBounds(bounds: LngLatBounds): CameraOptions;

type LngLatBounds =
  | { northeast: LngLat; southwest: LngLat }
  | [LngLat, LngLat]
  | [number, number, number, number];

// 예제 2

interface LngLatCorrect {
  lng: number;
  lat: number;
}
type LngLatLike =
  | LngLatCorrect
  | { lon: number; lat: number }
  | [number, number];

interface CameraCorrect {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
}
interface CameraOptions2 extends Omit<CameraCorrect, "center"> {
  center?: LngLatLike;
}
