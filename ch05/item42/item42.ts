function parseYAML(yaml: string): any {
  // ..
}

interface Book {
  name: string;
  author: string;
}
// 함수의 반환값에 타입 선언을 강제할 수 없기 때문에, 호출한 곳에서 타입 선언을 생략하게 된면 암시적 any 타입이 사용
const book: Book = parseYAML(`
    name: Choi
    author: Emily Bronte
`);

function safeParseYAML(yaml: string): unknown {
  return parseYAML(yaml);
}

const book2 = safeParseYAML(`
name: Choi
author: Emily Bronte
`) as Book;

// 예제 2

interface Feature {
  id?: string | number;
  geometry: Grometry;
  // JSON의 직렬화가 가능한 모든 것을 담는 잡동사니 주머니(grab-bag) 같은 존재
  properties: unknown;
}

// 예제 3

function processValue(val: unknown) {
  if (val instanceof Date) {
    // 타입이 Date
  }
}

function isBook(val: unknown): val is Book {
  return (
    typeof val === "object" && val !== null && "name" in val && "author" in val
  );
}

function processValue2(val: unknown) {
  if (isBook(val)) {
    // 타입이 Book
  }
}

// 예제 4

declare const foo: Foo;
let barAny = foo as any as Bar;
let barUnk = foo as unknown as Bar;
