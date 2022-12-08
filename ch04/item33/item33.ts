// 예제 1

// 문자열을 남발하여 선언(stringly typed)
interface Album {
  artist: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  recordingType: string; // 예를 들어, "live" 또는 "studio"
}

const kindOfBlue: Album = {
  artist: "Miles Davis",
  title: "Kind of Blue",
  releaseDate: "August 17th, 1959", // 날짜 형식이 다릅니다
  recordingType: "Studio", // 오타(대문자 S)
};

function recordRelease(title: string, date: string) {}

// 매개변수 순서가 잘못되어도 오류가 발생하지 않음
recordRelease(kindOfBlue.releaseDate, kindOfBlue.title);

// 타입을 명시적으로 정의하고 해당 타입의 의미를 설명하는 주석을 붙여 넣을 수 있다는 장점이 있음
// 이 녹음은 어떤 환경에서 이루어졌는지?
type RecordingType = "studio" | "live";

interface Album2 {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}

// 다른 곳으로 값이 전달되어도 타입 정보가 유지
// 사용자 입장에선 recordingType이 'studio'인지 'live'인지 알 수 없음
function getAlbumsOfType(recordingType: string): Album2[] {}

// 타입 체크가 되긴 하지만 any 타입이 있어서 정밀하지 못함
// 반환 값에 any를 사용하는 것은 매우 좋지 못한 설계(item38)
function pluck(records: any[], key: string): any[] {
  return records.map((r) => r[key]);
}

// key의 타입이 string이기 때문에 범위가 너무 넓음
function pluckGeneric<T>(records: T[], key: string): any[] {
  return records.map((r) => r[key]);
}

// keyof 연산자로 더욱 세밀하게 객체의 속성 체크가 가능
// 반환 타입을 추론할 수 있도록 함
// T[keyof T][]는 T 객체 내의 가능한 모든 값의 타입
function pluckGeneric2<T>(records: T[], key: keyof T): T[keyof T][] {
  return records.map((r) => r[key]);
}

// key의 값으로 하나의 문자열을 넣게 되면, 그 범위가 너무 넓어서 적절한 타입이라고 보기 어려움
// 타입이 (string | Date)[]
const releaseDates = pluck(albums, "releaseDate");

// 범위를 더 좁히기 위해 keyof T의 부분 집합(아마도 단일 값)으로 두 번째 제너릭 매개변수를 도입(item 14)
function pluckGeneric3<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map((r) => r[key]);
}
