document.monkey = "Tamarin";

(document as any).monkey = "Tarmarin";

// 예제 2

interface Document {
  monkey: string;
}

declare global {
  interface Document {
    monkey: string;
  }
}

interface MonkeyDocument extends Document {
  mokey: string;
}
(document as MonkeyDocument).mokey = "Macaque";

export {};
