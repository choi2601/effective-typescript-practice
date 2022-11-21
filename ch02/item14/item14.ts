// 예제 1

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

interface Pointer2D {
  x: number;
  y: number;
}

function distance2(a: Pointer2D, b: Pointer2D) {}

// 예제 2

interface Person {
  firstName: string;
  lastName: string;
}
interface IPersonWithBirthDate extends Person {
  birth: Date;
}
type TPersonWithBirthDate = Person & { birth: Date };

// 예제 3

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

interface ITopNavState {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
}

type TTopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

// K는 T 타입과 무관하고 범위가 매우 넓음
// K는 인덱스로 사용될 수 있는 string | number | symbol 타입이어야 함
// K는 실제로 T의 키의 부분 집합, 즉 keyof T가 되어야 함
type Pick<T, K> = { [k in K]: T[k] };
type Pick2<T, K extends keyof T> = {
  [k in K]: T[k];
};

type TTopNavState2 = Pick<State, "userId" | "pageTitle" | "recentFiles">;

// 에제 4

interface SaveAction {
  type: "save";
}
interface LoadAction {
  type: "load";
}
type Action = SaveAction | LoadAction;
type ActionType = "save" | "load"; // 타입의 중복

// "save" | "load"
type ActionType2 = Action["type"];
// { type: "save" | load }
type ActionRec = Pick<Action, "type">;

// 예제 5

interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}
class UIWidget {
  constructor(init: Options) {}
  update(options: OptionsUpdate) {}
}

// 매핑된 타입과 keyof 사용, 각 속성을 선택적으로 만듬
type OptionsUpdate2 = { [k in keyof Options]?: Options[k] };

class UIWidget2 {
  constructor(init: Options) {}
  update(options: Partial<Options>) {}
}

// 예제 6

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
};
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

// 자바스크립트 런타임 연산자 typeof X
type TOptions = typeof INIT_OPTIONS;

// 예제 7

function getUserInfo(userId: string) {
  // ..
  return {
    userId,
    name,
    age,
  };
}

// 함수의 '값'이 아닌 '타입'에 적용
type UserInfo = ReturnType<typeof getUserInfo>;

// 예제 8

interface Name {
  first: string;
  last: string;
}
type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" },
];
const couple2: DancingDuo<{ first: string }> = [
  { first: "Sonny" },
  { first: "Cher" },
];

// 예제 3 오류
