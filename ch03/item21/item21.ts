// 예제 1

interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

// 할당 시점에 넓히기가 동작해서 string으로 타입 추론
let x = "x";
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x);

// 예제 2

const mixed = ["x", 1];

// 예제 3
const x1 = "x";
getComponent(vec, x1);

// 자바스크립트에서 정상적으로 동작
// v의 타입은 { x: number }
const v = {
  x: 1,
};
v.x = 3;
v.x = "3";
v.name = "choi";

const v1: { x: 1 | 3 | 5 } = {
  x: 1,
};

// { x: number; y: number }
const v2 = { x: 1, y: 2 };
// {x: 1; y: number;}
const v3 = { x: 1 as const, y: 2 };
// { readonly x: 1; readonly y: 2; }
const v4 = { x: 1, y: 2 } as const;
