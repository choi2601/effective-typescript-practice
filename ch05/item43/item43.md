# Ch05

## Item43

몽키 패치보다는 안전한 타입을 사용하기

### 정리

자바스크립트는 객체와 클래스에 임의의 속성을 추가할 수 있을 만큼 유연

ex) window, document

객체에 임의의 속성을 추가하는 것은 좋은 방법은 아님

해당 데이터는 기본적으로 전역 변수가 되기 때문. 프로그램 내에서 서로 멀리 떨어진 부분들 간에 의존성을 발생(side effect)

타입 체커는 Document와 HTMLElement의 내장 속성에 대해선 알고 있지만, 임의로 추가한 속성에 대해서는 알지 못 함

any 단언문을 사용해서 해결할 수 있지만 타입 안정성을 상실하고 언어 서비스를 사용할 수 없음

(예제 1)

최선의 해결책은 document 또는 DOM으로부터 데이터를 분리하는 것

분리할 수 없다면 다음의 차선책이 있음

(예제 2)

[보강(augmentation)]

- 타입이 더 안전. 타입 체커는 오타나 잘못된 타입의 할당을 오류로 표시
- 속성에 주석을 붙일 수 있음
- 속성에 자동완성을 사용 가능
- 몽키패치가 어떤 부분에 적용되었는지 정확히 기록이 남음

모듈의 관점에서(타입스크립트 파일이 export/import를 사용하는 경우), 제대로 동작하게 하려면 global 선언을 사용

모듈 영역(scope), 보강은 전역적으로 사용되기 때문에, 코드의 다른 부분이나 라이브러리로부터 분리할 수 없음

애플리케이션이 실행되는 동안 속성을 할당하면 실행 시점에서 보강을 적용할 방법이 없음. 웹 페이지 내의 HTML 엘리먼트를 조작할 때, 어떤 엘리먼트는 속성이 있고 어떤 엘리먼트는 속성이 없는 경우 문제가 됨

[더 구체적인 타입 단언문을 사용]
