// 예시 1

type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = (sides) => {
  return 1;
};

// 예시 2

// lib.dom.d.ts

declare function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response>;

async function checkedFetch1(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response;
}

const checkedFetch2: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response;
};
