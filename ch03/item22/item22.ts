// 예제 1

// 타입이 HTMLElement | null
const el = document.getElementById("foo");
if (el) {
  el.innerHTML = "타입이 HTMLElement";
} else {
  alert("타입이 null");
}

function contains(text: string, search: string | RegExp) {
  // 타입이 RegExp
  if (search instanceof RegExp) {
    // ..
  }
}

interface A {
  a: number;
}
interface B {
  b: number;
}

function pickAB(ab: A | B) {
  if ("a" in ab) {
    // 타입이 A
  } else {
    // 타입이 B
  }
  // 타입이 A | B
}

function contains2(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  // 타입이 string[]
}

interface UploadEvent {
  type: "upload";
}
interface DownloadEvent {
  type: "download";
}
type AppEvent = UploadEvent | DownloadEvent;
function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
    // 타입이 download
    case "upload":
    // 타입이 upload
  }
}

function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

// 예제 2

// 자바스크립트 상에서 typeof null 또한 object
const el2 = document.getElementById("foo");
if (typeof el === "object") {
  // 타입이 HTMLElement | null
}

// 빈 문자열과 0 모두 false가 되기 때문에
function foo(x?: number | string | null) {
  if (!x) {
    // 타입이 stirng | number | null | undefined
  }
}

// 배열에서 타입 가드 사용

const jackson5 = ["Jakie", "Tito", "Jermaine", "Marlon", "Michel"];
const members = ["Janet", "Michel"]
  .map((who) => jackson5.find((n) => n === who))
  .filter((who) => jackson5.find((n) => n === who)); // 타입이 (string | undefined)[]
const members2 = ["Janet", "Michel"]
  .map((who) => jackson5.find((n) => n === who))
  .filter((who) => who !== undefined); // 여전히 타입이 (string | undefined)[]

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const members3 = ["Janet", "Michel"]
  .map((who) => jackson5.find((n) => n === who))
  .filter(isDefined); // 타입이 string[]
