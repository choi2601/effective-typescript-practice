// 예제 1

interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({ radius, height });

function calculateVolume(shape: unknown) {
  // instanceof는 자바스크립트의 런타임 연산자, 값에 대해서 연산(타입이 아니라 함수를 참조)
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}

// 예제 2

class CylinderClass {
  radius = 1;
  height = 1;
}

function calculateVolume2(shape: unknown) {
  // 타입으로 사용
  if (shape instanceof Cylinder) {
    // ..
  }
}

type T1 = typeof p; // 타입은 Person
type T2 = typeof email; // 타입은 (p: Person, subject: stinrg, body: string) => Response

const v1 = typeof p; // 값은 'object'
const v2 = typeof email; // 값은 'function'

// 예제 3

const v = typeof CylinderClass; // 값이 'function', 클래스가 자바스크립트에서는 실제 함수로 구현되기 때문에
type T = typeof CylinderClass; // 타입이 typeof Cylinder(인스턴스의 타입 X)

declare let fn: T;
const c = new fn(); // 타입이 Cylinder

type c = InstanceType<typeof CylinderClass>; // 타입이 Cylinder

// 예제 4

const first: Person["first"] = p["first"];

type PersonEl = Person["first" | "last"];
type Tuple = [string, number, Date];
type TupleEl = Tuple[number];

// 예제 5

function email(options: { person: Person; subject: string; body: string }) {
  //...
}

// 구조 분해 할당
// 값의 관점에서 Person과 string이 해석(Person, string 이라는 변수 생성하려고 한 것)
function email({ person: Person, subject: string, body: string }) {
  // ...
}

// 타입과 값의 분리
function email({
  person,
  subject,
  body,
}: {
  person: Person;
  subject: string;
  body: string;
}) {
  // ...
}
