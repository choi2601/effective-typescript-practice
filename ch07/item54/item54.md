# Ch07

## Item54

객체를 순회하는 노하우

### 정리

(예제 1)

객체를 다룰 때는 '프로토타입 오염'의 가능성을 염두에 해야 함

for-in 구문을 사용하면, 객채의 정의에 없는 속성이 갑자기 나올 수 있음

```
    Object.prototype.z = 3;
    const obj = { x: 1, y: 2 };
    for(const k in obj) { console.log(k); }
```

=> 객체를 순회할 때, 키가 어떤 타입인지 정확히 파악하고 있다면 let k: keyof T 와 for-in 문을 사용
=> 함수의 매개변수로 쓰이는 객체에는 추가적인 키가 존재할 수 있음을 명심
