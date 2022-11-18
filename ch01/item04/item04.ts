// 예제 1
interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

// NamedVector의 구조가 Vector2D와 호환 가능하기 때문에 별도의 calculateLength를 구현할 필요 X
const v: NamedVector = { x: 3, y: 4, name: "Zee" };
calculateLength(v);

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

// 제대로 된 정규화 값이 출력되지 않음
normalize({ x: 3, y: 4, z: 5 });

// 예제 2

function calculateLength1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    // 'string'은 'Vector3D'의 인덱스로 사용할 수 없기에 엘리먼트는 암시적으로 'any' 타입입니다.
    length += Math.abs(coord);
  }
  return length;
}

const vec3D = { x: 3, y: 4, z: 1, address: "123 Broadway" };
calculateLength1(vec3D);

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C("instance of C");
const d: C = { foo: "object literal" }; // 정상
