# Ch03

## Item23

한꺼번에 객체 생성하기

### 정리

객체를 생성할 때는 속성을 하나씩 추가하기보단 여러 속성을 포함해서 한꺼번에 생성해야 하는 타입 추론에 유리

타입 단언문을 사용

(예제 1)

작은 객체를 조합헤서 큰 객체를 만들어야 하는 경우에 여러 단계를 거치는 것은 좋지 않음

전개 연산자를 사용한다면 큰 객체를 한꺼번에 만들 수 있음

객체 전개 연산자를 사용하면 타입 걱정 없이 필드 단위로 객체를 생성 가능. 모든 업데이트마다 새 변수를 사용하여 각각 새로운 타입을 얻도록 하는 것이 중요

타입에 안전한 방식으로 조건부 속성을 추가하려면, 속성을 추가하지 않는 null 또는 {} 객체 전개를 사용하면 됨

(예제 2)
