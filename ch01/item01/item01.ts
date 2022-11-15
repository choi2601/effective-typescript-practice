// 예제 1
function greet(who: string) {
  console.log("Hello", who);
}

// 예제 2
let city = "new york city";
console.log(city.toUppercase());

// 예제 3
interface State {
  name: string;
  capital: string;
}

const states = [
  { name: "Alabama", capitial: "Montgomery" },
  { name: "Alaska", capitial: "Juneau" },
  { name: "Arizona", capitial: "Phoneix" },
];
for (const state of states) {
  // 타입 구문을 추가하기 전에는 정확한 오류의 원인을 파악할 수 없었음
  console.log(state.capitiol);
}

// 예제 4
const x = 2 + "3";
const y = "2" + 3;

const a = null + 7;
const b = [] + 12;
