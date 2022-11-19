// 예제 1

const x: never = 12;

// 예제 2

type AB = "A" | "B";
type AB12 = "A" | "B" | 12;

const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab;

declare let twelve: AB12;
const back: AB = twelve;

// 예제 3

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "choi",
  birth: new Date("1995/11/06"),
  death: new Date("1954/06/07"),
};

// 예제 4

// 타입이 never
type K = keyof (Person | Lifespan);

// 예제 5

interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  z: number;
}

// 예제 6

function getKey<K extends string>(val: any, key: K) {
  // ...
}

getKey({}, "x");
getKey({}, Math.random() < 0.5 ? "a" : "b");
getKey({}, document.title);

// 예제 7

const list = [1, 2]; // 타입은 number[]
const tuple: [number, number] = list;

const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
