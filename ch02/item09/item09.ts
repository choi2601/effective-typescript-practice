// 예제 1

interface Person {
  name: string;
}

// 타입 선언
const alice: Person = { name: "alice", occupation: "Typescript developer" };

// 타입 단언(타입스크립트가 추론한 타입이 있더라도 Person 타입으로 간주)
const bob = { name: "bob", occupation: "Javascript developer" } as Person;

const alice2: Person = {};
const bod2 = {} as Person;

// 예제 2

// Person[]을 원했지만 결과는 { name: string }[]
const people1 = ["alice", "bob", "jan"].map((name) => ({ name }));

// 타입 단언을 사용한 경우(런타임에 문제 발생)
const people2 = ["alice", "bob", "jan"].map((name) => ({} as Person));

// 타입 단언을 사용한 경우
const people3 = ["alice", "bob", "jan"].map((name) => {
  const person: Person = { name };
  return person;
});
// 위의 코드와 동일
const people4: Person[] = ["alice", "bob", "jan"].map(
  (name): Person => ({ name })
);

// 예제 3

document.querySelector("#myButton")?.addEventListener("click", (e) => {
  e.currentTarget;
  const button = e.currentTarget as HTMLButtonElement;
});

// HTMLElement | null
const elNull = document.getElementById("foo");
// HTMLElement
const el = document.getElementById("foo")!;

interface Person {
  name: string;
}
const body = document.body;
const el = body as Person;
const el2 = document.body as unknown as Person;
