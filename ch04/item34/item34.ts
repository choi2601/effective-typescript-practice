// 예제 1

interface Point {
  type: "Point";
  coordinates: number[];
}

type GeoPosition = [number, number];

// 위치 정보에는 더 많은 값이 추가될 수 있기 때문에 오히려 비효율적
interface Point2 {
  type: "Point";
  coordinates: GeoPosition;
}
