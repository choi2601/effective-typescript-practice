// 예제 1
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function caculateArea1(shape: Shape) {
  // instanceof는 런타임 시에 일어남
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

function caculateArea2(shape: Shape) {
  // 속성이 존재하는지 체크
  if ("height" in shape) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

interface Square2 {
  kind: "square";
  width: number;
}
interface Rectangle2 {
  kind: "rectangle";
  height: number;
  width: number;
}
type Shape2 = Square2 | Rectangle2;

function caculateArea3(shape: Shape2) {
  // 런타임에 접근 가능한 타입 정보를 명시적으로 저장하는 태그 기법
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

class SquareClass {
  constructor(public width: number) {}
}
class RectangleClass extends SquareClass {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
// 타입으로 참조
type Shape3 = SquareClass | RectangleClass;

function caculateArea4(shape: Shape3) {
  // 값으로 참조
  if (shape instanceof RectangleClass) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// 예제 2
function asNumber(val: number | string): number {
  // as number는 타입 연산(런타임에 영향을 미치지 않음)
  return val as number;
}
// 트랜스파일 결과
function asNumberOfJS(val) {
  return val;
}
function asNumberOfTS(val: number | string): number {
  return typeof val === "string" ? Number(val) : val;
}

// 예제 3
function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log("실행 X");
  }
}

interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch("/light");
  // 타입을 보장하지 못함
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}

// 예제 4

// 타입 정보만을 제공(자바스크립트로 변환되는 과정에서 제거)
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
  return a + b;
}

const three = add(1, 2);
const twelve = add("1", "2");
