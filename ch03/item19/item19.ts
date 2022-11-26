// 예제 1

interface Product {
  // id: number;
  id: string;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}

function logProduct2(product: Product) {
  // 비구조화 할당문은 모든 지역 변수의 타입이 추론
  const { id, name, price } = product;
  console.log(id, name, price);
}

// 예제 2

const cache: { [ticker: string]: number } = {};
function getQuote(ticker: string) {
  if (ticker in cache) {
    return cache[ticker];
  }
  return fetch(`https://quotes.example.com/?=${ticker}`)
    .then((res) => res.json())
    .then((quote) => {
      cache[ticker] = quote;
      return quote;
    });
}
// getQuote는 항상 Promise를 반환
// 오류가 getQuote가 아니라 getQuote를 호출한 코드에서 발생
getQuote("MSFT").then((res) => console.log(res));

interface Vector2D {
  x: number;
  y: number;
}
function add(a: Vector2D, b: Vector2D) {
  return { x: a.x + b.x, y: a.y + b.y };
}
// add 함수의 매개변수는 명명된 타입을 가지지만, 추론된 반환 타입은 그렇지 못함
add();
