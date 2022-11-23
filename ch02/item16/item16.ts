// 예제 1

// Array 타입 선언(lib.es5.d.ts)
interface Array<T> {
  // ...
  [n: number]: T;
}

const xs = [1, 2, 3];
const x0 = xs[0];
// 버그를 잡기 위한 순수 타입스크립트 코드
const x1 = xs["1"];

const tupleLike: ArrayLike<string> = {
  "0": "A",
  "1": "B",
  length: 2,
};
