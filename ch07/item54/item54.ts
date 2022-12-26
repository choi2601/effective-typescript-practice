// 예제 1

const obj = {
  one: "uno",
  two: "dos",
  three: "tres",
};
let k: keyof typeof obj;
for (k in obj) {
  const v = obj[k];
}

interface ABC {
  a: string;
  b: string;
  c: number;
}
function foo(abc: ABC) {
  for (const k in abc) {
    const v = abc[k];
  }
}
const x = { a: "a", b: "b", c: 2, d: new Date() };
// 덕 타이핑(item 4)
foo(x);

function foo2(abc: ABC) {
  for (const [k, v] of Object.entries(abc)) {
    // k는 string 타입
    // v는 any 타입
  }
}
