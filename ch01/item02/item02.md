# Ch01

## Item02

타입스크립트 설정 이해하기

### 정리

(예제 1)

`noImplicitAny`: 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어

any 타입을 사용할 경우 타입 체커는 무력

암시적(implicit) any: any를 코드를 넣지 않았음에도 any 타입으로 간주

noImplicitAny 해제는 자바스크립트에서 타입스크립트를 마이그레이션 하는 경우에 한정

`strictNullChecks`: null과 undefined가 모든 타입에서 허용되는지 확인

(예제 2)

null을 허용하지 않으려면, 해당 값이 어디서부터 왔는지 찾아야 하고, null을 체크하는
코드나 단언문(assertion)을 추가

undefined는 객체가 아닙니다 같은 런타임 오류를 방지하기 위해 사용하는 것이 좋음

타입스크립트 상에서 엄격한 체크(위의 설정들)를 원한다면 strict 설정을 고려
