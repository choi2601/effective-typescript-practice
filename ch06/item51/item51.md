# Ch06

## Item51

의존성 분리를 위해 미러 타입 사용하기

### 정리

(예제 1)

타입 선언이 @types/node에 의존하기 때문에 @types/node는 devDependcies로 포함되어야 함

[문제점]

- @types와 무관한 자바스크립트 개발자
- NodeJS와 무관한 타입스크립트 웹 개발자
