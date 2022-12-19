// 예제 1

class C {
  vals = [1, 2, 3];
  logSquares() {
    for (const val of this.vals) {
      console.log(val * val);
    }
  }
}

const c = new C();
c.logSquares();

const c2 = new C();
const method = c2.logSquares;

// TypeError: undefined의 'vals' 속성을 읽을 수 없음
// this 바인딩의 문제
method();

method.call(c);
