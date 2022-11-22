// 예제 1

type Rocket = { [property: string]: string };
const rocket: Rocket = {
  name: "Falcon",
  variant: "v1.0",
};

// 에제 2

function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split("\n");
  const [header, ...rows] = lines;
  const headerColumns = header.split(",");
  return rows.map((rowStr) => {
    const row: { [columnName: string]: string } = {};
    rowStr.split(",").forEach((cell, i) => {
      row[headerColumns[i]] = cell;
    });
    return row;
  });
}

interface ProductRow {
  productId: string;
  name: string;
  price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

function safeParseCSV(
  input: string
): { [columnName: string]: string | undefined }[] {
  return parseCSV(input);
}

// 너무 광범위
interface Row1 {
  [column: string]: string;
}
// 최선
interface Row2 {
  a: number;
  b?: number;
  c?: number;
  d?: number;
}
// 가장 정확하지만 사용하기 번거로움
type Row3 =
  | { a: number }
  | { a: number; b: number }
  | { a: number; b: number; c: number };

// 예제 4

type Vec3D = Record<"x" | "y" | "z", number>;
// Type Vec3D = {
//     x: number;
//     y: number;
//     z: number;
// }

type Vec3D2 = { [k in "x" | "y" | "z"]: number };
// Type Vec3D2 = {
//     x: number;
//     y: number;
//     z: number;
// }
type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };
