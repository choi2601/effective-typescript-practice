// 예제 1

let age: number;
age = "12";
age = "12" as any;

// 예제 2
function calculateAge(birthDate: Date): number {
  // ...
}

let birthDate: any = "1990-01-19";
calculateAge(birthDate);
