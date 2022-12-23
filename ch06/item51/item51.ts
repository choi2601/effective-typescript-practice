// 예제 1

// NodeJS 사용자들을 위해 Buffer 타입을 허용
// Buffer 타입 정의는 NodeJS 타입 선언을 설치해서 얻을 수 있음(@types/node)
function parseCSV(contents: string | Buffer): { [column: string]: string }[] {
  if (typeof contents === "object") {
    return parseCSV(contents.toString("utf8"));
  }
}

// 필요한 메서드와 속성만 별도로 작성
interface CsvBuffer {
  toString(encoding: string): string;
}
function parseCSV2(
  contents: string | CsvBuffer
): { [column: string]: string }[] {
  if (typeof contents === "object") {
    return parseCSV(contents.toString("utf8"));
  }
}
