// 예제 1

interface Coordinate {
  x: number;
  y: number;
}
interface BonudingBox {
  x: [number, number];
  y: [number, number];
}
interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BonudingBox;
}

// polygon.bbox가 반복해서 사용
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  if (polygon.bbox) {
    if (
      pt.x < polygon.bbox.x[0] ||
      pt.x > polygon.bbox.x[1] ||
      pt.y < polygon.bbox.y[0] ||
      pt.y > polygon.bbox.y[1]
    ) {
      return false;
    }
  }
}

// 임시 변수 선언
// box 라는 별칭을 만듬으로써, 흐름 분석을 방해
function isPointInPolygon2(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  // 속성 체크는 polygon.bbox의 타입을 정제하였지만 box는 그렇지 못하기 때문
  if (polygon.bbox) {
    if (pt.x < box[0] || pt.x > box[1] || pt.y < box.y[0] || pt.y > box.y[1]) {
      return false;
    }
  }
}

// box와 bbox는 같은 값인데 다른 값을 사용하고 있음
function isPointInPolygon3(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  // 별칭을 일관성 있게 사용
  if (box) {
    if (pt.x < box[0] || pt.x > box[1] || pt.y < box.y[0] || pt.y > box.y[1]) {
      return false;
    }
  }
}

function isPointInPolygon4(polygon: Polygon, pt: Coordinate) {
  const { bbox } = polygon;

  if (bbox) {
    if (
      pt.x < bbox[0] ||
      pt.x > bbox[1] ||
      pt.y < bbox.y[0] ||
      pt.y > bbox.y[1]
    ) {
      return false;
    }
  }
}

// 예제 2
const { bbox } = polygon;
if (!!bbox) {
  calculatePolygonBbox(polygon);
  // polygon.bbox와 bbox는 다른 값을 참조
}
