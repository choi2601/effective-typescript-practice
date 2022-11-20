// 예제 1

interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

// 구조적 타이핑 관점에서 오류가 발생하지 않아야 함
const r1: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
};

// 임시 변수의 할당
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
};
const r2: Room = obj;

// 예제 2

interface Options {
  title: string;
  darkMode?: boolean;
}
function createWindow(options: Options) {
  if (options.darkMode) {
    // ...
  }
}
// Options 타입은 범위가 매우 넓기 때문에, 순수한 구조적 타입 체크는 해당 오류를 파악하지 못함
createWindow({
  title: "Spider Solitaire",
  darkmode: true,
});

// document와 HTMLAnchorElement의 인스턴스 모두 string 타입인 title 속성을 가지기 때문에 정상
const o1: Options = document;
const o2: Options = new HTMLAnchorElement();

// 객체 리터럴을 사용한 경우 잉여 속성 체크 동작
const o3: Options = { darkmode: true, title: "Ski Free" };

// 객체 리터럴이 아니거나 타입 단언이 아닌 경우 잉여 속성 체크 동작하지 않음
const intermediate = { darkmode: true, title: "Ski Free" };
const o4: Options = intermediate;

const o5 = { darkmode: true, title: "Ski Free" } as Options;

// 예제 3

interface Options {
  darkMode?: boolean;
  [otherOptions: string]: boolean;
}
const o6: Options = { darkmode: true }; // 정상

// 에제 4

interface LineChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areaChart?: boolean;
}
const opts = { logScale: true };
const o: LineChartOptions = opts;
