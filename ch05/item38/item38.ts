// 예제 1

function processBar(b: Bar) {}

function f() {
  const x = expressionReturningFoo();
  processBar(x);
}

function f1() {
  const x: any = expressionReturningFoo();
  processBar(x);
}
// any 타입이 processBar 함수의 매개변수에서만 사용된 표현식이므로 다른 코드에는 영향을 미치지 않기 때문에 임시적으로 타입 단언을 사용하는 것이 좋음
function f2() {
  const x = expressionReturningFoo();
  processBar(x as any);
}

// @ts-ignore를 사용한 다음 줄의 오류를 무시
function f3() {
  const x = expressionReturningFoo();
  // @ts-ignore
  processBar(x);
  return x;
}

// g 함수 내에서 f1이 사용되므로 f1의 반환 타입인 any 타입이 foo의 타입에 영향을 줌
function g() {
  const foo = f1();
  foo.fooMethod();
}
