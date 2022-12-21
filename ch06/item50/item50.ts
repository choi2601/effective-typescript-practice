// 예제 1

function double(x: number | string): number | string;
function double(x: any) {
  return x + x;
}

// number 타입을 매개변수로 넣고 string 타입을 반환하는 경우도 포함
const num = double(12);
const str = double("x");

function double2<T extends number | string>(x: T): T;
function double2(x: any) {
  return x + x;
}

// 타입이 너무 과하게 구체적
const num2 = double2(12);
const str2 = double2("x");

// 함수의 구현체는 하나지만, 타입 선언은 몇 개든지 만들 수 있음
function double3(x: number): number;
function double3(x: string): string;
function double3(x: any) {
  return x + x;
}

// 타입스크립트는 오버로딩 타입 중에서 일치하는 타입을 찾을 때까지 순차적으로 검색
// string|number 타입은 string에 할당할 수 없음
function f(x: number | string) {
  return double3(x);
}

// T가 string의 부분 집합이면(string, 문자열 리터럴, 문자열 리터럴의 유니온) 반환 타입이 string
// 그 외의 경우엔 반환 타입이 number
function double4<T extends string | number>(
  x: T
): T extends string ? string : number;
function double4(x: any) {
  return x + x;
}
