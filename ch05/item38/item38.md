# Ch05

## Item38

any 타입은 가능한 한 좁은 범위에서만 사용하기

### 정리

타입스크립트의 타입 시스템은 선택적(optional)이고 점진적(gradual)이기 때문에 정적이면서 동적인 특성을 지님

타입스크립트는 프로그램의 일부분에만 타입 시스템을 적용 가능(점진적인 마이그레이션이 가능)

마이그레이션을 할 때 코드의 일부분에 타입 체크를 비활성화시켜 주는 any 타입이 중요한 역할

(예제 1)

타입스크립트가 함수의 반환 타입을 추론할 수 있는 경우에도 함수의 반환 타입을 명시하는 것이 좋음

함수의 반환 타입을 명시하면 any 타입이 함수 바깥으로 영향을 미치는 것을 방지 가능

객체 전체를 any로 단언하면 다른 속성들(a와 b) 역시 타입 체크가 되지 않는 부작용이 생김. 최소한의 범위에만 any를 사용하는 것이 좋음
