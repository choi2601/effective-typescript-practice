# Ch02

## Item17

변경 관련된 오류 방지를 위해 readonly 사용하기

### 정리

매개변수를 readonly로 사용

타입스크립트는 매개변수가 함수 내에서 변경이 일어나는지 확인

호출하는 쪽에서 함수가 매개변수를 변경하지 않는다는 보장

호출하는 쪽에서 함수에 readonly 배열을 매개변수로 할당 가능

(예제 1)

readonly number[]

- 배열의 요소를 읽을 수는 있으나, 쓸 수는 없음
- length를 읽을 수는 있으나, 바꿀 수는 없음
- 배열을 변경하는 pop을 비롯한 다른 메서드를 호출할 수 없음

number[]는 readonly number[]보다 기능이 많기 때문에, readonly number[]의 서브타입

readonly는 얕게(shallow) 동작

만약 객체의 readonly 배열이 있다면, 그 객체 자체는 readonly가 아님
