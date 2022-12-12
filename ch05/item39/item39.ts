// 예제 1

function getLenthBad(array: any) {
  return array.length;
}

// 함수 내의 arr.length 타입 체크
// 반환 타입이 any 대신 number로 추론
// 함수 호출 시 매개변수가 배열인지 체크
function getLenth(array: any[]) {
  return array.length;
}

getLenthBad(/12/);
getLenth(/12/);

function hasTwelveLetterKey(o: { [key: string]: any }) {
  for (const key in o) {
    if (key.length === 12) {
      return true;
    }
  }
  return false;
}

// object 타입은 객체의 키를 열거할 수는 있으나 속성에 접근할 수 없다는 점에서 {[key: string]: any}와는 다름
function hasTwelveLetterKey2(o: object) {
  for (const key in o) {
    if (key.length === 12) {
      console.log(key, o[key]);
    }
  }
  return false;
}

type Fn0 = () => any;
type Fn1 = (arg: any) => any;
type FnN = (...args: any[]) => any; // 모든 개수의 매개변수. Function 타입과 동일
