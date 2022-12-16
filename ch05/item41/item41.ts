// 예시 1

function range(start: number, limit: number) {
  const out = [];
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out;
}

// 예제 2

function makeSquares(start: number, limit: number) {
  const out = [];
  range(start, limit).forEach((i) => {
    out.push(i * i);
  });
  return out;
}
