// 예제 1

// 공집합과의 유니온은 어떠한 효과가 없기 때문에 Promise<Response | never>가 아님
// 프로미스를 사용하면 타입스크립트의 모든 타입 추론이 제대로 동작
function timeout(millis: number): Promise<never> {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout"), millis);
  });
}

async function fetchWithTimeout(url: string, ms: number) {
  return Promise.race([fetch(url), timeout(ms)]);
}

// 에제 2

const _cache: { [url: string]: string } = {};
function fetchWithCache(url: string, callback: (text: string) => void) {
  if (url in _cache) {
    // 콜백 함수가 동기로 호출
    callback(_cache[url]);
  } else {
    fetchUrl(url, (text) => {
      _cache[url] = text;
      callback(text);
    });
  }
}

// 캐시가 되어 있다면 'success'가 되고 나서 바로 'loading'으로 바뀜
let requestStatus: "loading" | "success" | "error";
function getUser(userId: string) {
  fetchWithCache(`/user/${userId}`, (profile) => {
    requestStatus = "success";
  });
  requestStatus = "loading";
}

// 일관적인 동작을 강제

async function fetchWithCacheAsync(url: string) {
  if (url in _cache) {
    return _cache[url];
  }
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

async function getUserAsync(userId: string) {
  requestStatus = "loading";
  const profile = await fetchWithCacheAsync(`/user/${userId}`);
  requestStatus = "success";
}
