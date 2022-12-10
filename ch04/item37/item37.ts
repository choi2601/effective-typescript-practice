// 예제 1

interface Vector2D {
  x: number;
  y: number;
}

function calculateNorm(p: Vector2D) {
  return Math.sqrt(p.x * p.x + p.y + p.y);
}

calculateNorm({ x: 3, y: 4 });
const vec3D = { x: 3, y: 4, z: 1 };

calculateNorm(vec3D);
calculateNorm({ x: 3, y: 4, z: 1 });

interface Vector2DNew {
  _brand: "2d";
  x: number;
  y: number;
}

function vec2D(x: number, y: number): Vector2DNew {
  return { x, y, _brand: "2d" };
}
function calculateNorm2(p: Vector2DNew) {
  return Math.sqrt(p.x * p.x + p.y + p.y);
}

calculateNorm(vec2D(3, 4));
calculateNorm2(vec3D);

// 예제 2

// string 타입이면서 _brand 속성을 가지는 객체를 만들 수는 없음(온전히 타입 시스템의 영역)
type AbsolutePath = string & { _brand: "abs" };
function listAbsolutePath(path: AbsolutePath) {}
function isAbsolutePath(path: string): path is AbsolutePath {
  return path.startsWith("/");
}

function f(path: string) {
  if (isAbsolutePath(path)) {
    listAbsolutePath(path);
  }
  listAbsolutePath(path);
}

type Meters = number & { _brand: "meters" };
type Seconds = number & { _brand: "seconds" };

const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;

const oneKim = meters(1000); // 타입이 Meters
const oneMin = seconds(60); // 타입이 seconds

// number 타입에 상표를 붙여도 산술 연산 후에는 상표가 없어지기 때문에 실제 사용하는 것엔 무리
// 코드에 여러 단위가 혼합된 많은 수의 숫자가 들어 있는 경우, 숫자의 단위를 문서화한다는 관점에선 괜찮음
const tenKim = oneKim * 10; // 타입이 number
