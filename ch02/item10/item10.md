# Ch02

## Item10

객체 래퍼 타입 피하기

### 정리

자바스크립트 기본형들은 불변(immutable)이며 메서드를 가지지 않는다는 점에서 객체와 구분

string '기본형'에는 메서드가 없지만, 자바스크립트에는 메서드를 가지는 String '객체' 타입이 정의

자바스크립트는 기본형과 객체 타입을 서로 자유롭게 변환

string 기본형에 charAt 같은 메서드를 사용할 때, 자바스크립트는 기본형을 String 객체로 래핑(wrap)하고, 메서드를 호출하고, 마지막에 래핑한 객체를 버림

String.prototype

몽키-패치(monkey-patch): 런타임에 프로그램의 어떤 기능을 수정해서 사용하는 기법

타입스크립트는 기본형과 객체 래퍼 타입을 별도로 모델링

- string과 String
- number와 Number
- boolean과 Boolean
- symbol과 Symbol
- bigint와 BigInt

(예제 1)

기본형 타입은 객체 래퍼에 할당할 수 있지만 그 반대는 안됨

new 없이 BigInt와 Symbol를 호출하는 경우는 기본형을 생성
