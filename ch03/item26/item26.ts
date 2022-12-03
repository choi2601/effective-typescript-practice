// 예제 1

function setLanguage(language: string) {}

setLanguage("Java Script");
let language = "Java Script";
setLanguage(language);

type Language = "JavaScript" | "TypeScript" | "Python";
function setLanguage2(language: Language) {}

// Language 타입에 문자열 리터럴 'JavaScript'는 할당 가능
setLanguage("JavaScript");

// 할당 시점에 타입을 추론(string 타입으로 추론)
let language2 = "JavaScript";
setLanguage2(language2);

let language3: Language = "JavaScript";
setLanguage2(language3);

const language4 = "JavaScript";
setLanguage2(language4);

// 에제 3

function panTo(where: [number, number]) {}

panTo([10, 20]);

const loc = [10, 20];
panTo(loc);

const loc2: [number, number] = [10, 20];
panTo(loc2);

// 타입이 readonly [10, 20]으로서, '너무 과하게' 정확
// panTo의 타입 시그니처는 where의 내용이 불변이라고 보장하지 않음
const loc3 = [10, 20] as const;
panTo(loc3);

function panTo2(where: readonly [number, number]) {}

// as const는 문맥 손실과 관련한 문제를 해결할 수 있지만, 타입 정의에 실수한다면 타입 정의가 아니라 호출하는 곳에서 오류
// 상수 단언을 사용할 경우 정의한 곳이 아니라 사용한 곳에서 오류가 발생하여 주의
const loc4 = [10, 20, 30] as const;
panTo2(loc4);

// 예제 4

interface GovernedLanguage {
  language: Language;
  organization: string;
}

function complain(language: GovernedLanguage) {}

// 기본적으로 객체의 속성은 let으로 선언되어 있기 때문에 오류 발생. 타입 단언/선언ㄴ이 팔요(item 21)
const ts = {
  language: "TypeScript" as const,
  organization: "Microsoft",
};
const ts2: GovernedLanguage = {
  language: "TypeScript" as const,
  organization: "Microsoft",
};

complain(ts);

// 예제 5

function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {}

callWithRandomNumbers((a, b) => {
  console.log(a + b);
});

// 가능할 경우 전체 함수 표현식에 타입 선언을 적용(item 12)
const fn = (a: number, b: number) => {
  console.log(a + b);
};

callWithRandomNumbers(fn);

declare function Fn(a: number, b: number): void;

const fn2: typeof Fn = (a, b) => {};
