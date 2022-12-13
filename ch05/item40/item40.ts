// 예시 1

declare function cacheLast<T extends Function>(fn: T): T;

declare function shallowEqual(a: any, b: any): boolean;

// 타입스크립트는 반환문에 있는 함수와 원본 함수 T 타입이 어떤 관련이 있는지 모르기 때문에 에러 발생
// 결과적으로 원본 함수 T 타입과 동일한 매개변수로 호출되고 반환값 역시 예상한 결과가 되기 때문에, 타입 단언문을 사용하여 오류 해결
function cacheLast<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;
  return function (...args: any[]) {
    if (!lastArgs || !shallowEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }
    return lastResult;
  } as unknown as T;
}

declare function shallowObjectEqual<T extends object>(a: T, b: T): boolean;

function shallowObjectEqual(a: any, b: any): boolean {
  for (const [k, aVal] of Object.entries(a)) {
    if (!(k in b) || aVal !== (b as any)[k]) {
      return false;
    }
    return Object.keys(a).length === Object.keys(b).length;
  }
}
