# Ch03

## Item25

비동기 코드에는 콜백 대신 async 함수 사용하기

### 정리

콜백보다 Promise나 async/await를 사용해야 하는 이유

- 콜백보다는 Promise가 코드를 작성하기 더 용이
- 콜백보다는 Promise가 타입을 추론하기 쉬움

Promise.race

(예제 1)

Promise를 생성하는 것보다 async/await를 사용해야 하는 이유

- 일반적으로 간결하고 직관적인 코드가 됨
- async 함수는 항상 프로미스를 반환하도록 강제
  - 함수는 항상 동기 또는 비동기로 실행되어야 하며 절대 혼용되어서는 안됨
- async 화살표 함수를 생성 가능

(예제 2)
