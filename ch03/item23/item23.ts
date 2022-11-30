// 예제 1

interface Point {
  x: number;
  y: number;
}
const pt = {};
pt.x = 3;
pt.y = 4;

const pt2: Point = {};
pt2.x = 3;
pt2.y = 4;

const pt3 = { x: 3, y: 4 };

const pt4 = {} as Point;
pt4.x = 3;
pt4.y = 4;

// 예제 2

const pt5 = { x: 3, y: 4 };
const id = { name: "choi" };
const namedPoint = {};
Object.assign(namedPoint, pt5, id);
namedPoint.name;

const namedPoint2 = { ...pt, ...id };
namedPoint2.name;

const a = {};
const b = { ...a, x: 3 };
const c: Point = { ...b, y: 4 };

// middle이 선택적 필드로 정의
declare let hasMiddle: boolean;
const firstLast = { first: "Harry", last: "Truman" };
const president = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };

// start와 end가 선택적 필드가 아닌 함께 정의
declare let hasDates: boolean;
const nameTitle = { name: "Khufu", title: "Pharaoh" };
const pharoh = {
  ...nameTitle,
  ...(hasDates ? { start: -2859, end: -2566 } : {}),
};
pharoh.start;

// 헬퍼 함수를 사용하여 선택적 필드 정의
function addOptional<T extends object, U extends object>(
  a: T,
  b: U | null
): T & Partial<U> {
  return { ...a, ...b };
}
const pharoh2 = addOptional(
  nameTitle,
  hasDates ? { start: -2859, end: -2566 } : null
);
pharoh2.start;
