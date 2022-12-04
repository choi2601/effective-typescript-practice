// 예제 1

interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

function renderPage(state: State) {
  if (state.error) {
    return "Error!";
  } else if (state.isLoading) {
    return "Loading...";
  }
  return "content";
}

// 상태 값의 두 가지 속성이 동시에 정보가 부족하거나, 두 가지 속성이 충돌할 수 있음(타입 설계 상의 오류)
// State 타입은 isLoading이 true이면서 동시에 error 값이 설정되는 무효한 상태를 허용
async function changePage(state: State, newPage: string) {
  state.isLoading = true;
  try {
    const response = await fetch(getUrlForPage(newPage));
    if (!response.ok) {
      throw new Error("Error!");
    }
    const text = await response.text();
    state.isLoading = false;
    state.pageText = text;
  } catch (e) {
    state.error = e;
  }
}

interface RequestPending {
  state: "pending";
}
interface RequestError {
  state: "error";
  error: string;
}
interface RequestSuccess {
  state: "ok";
  pageNext: string;
}

// 네트워크 요청 과정 각각의 상태를 명시적으로 모델링하는 태그된 유니온(구별된 유니온) 사용
type RequestState = RequestPending | RequestError | RequestSuccess;

interface State2 {
  currentPage: string;
  requests: { [page: string]: RequestState };
}

function renderPage2(state: State2) {
  const { currentPage } = state;
  const requestState = state.requests[currentPage];
  switch (requestState.state) {
    case "pending":
      return "Loading...";
    case "error":
      return "Error";
    case "ok":
      return "Ok";
  }
}

async function changePage2(state: State2, newPage: string) {
  state.requests[newPage] = { state: "pending" };
  state.currentPage = newPage;
  try {
    const response = await fetch(getUrlForPage(newPage));
    if (!response.ok) {
      throw new Error("Error");
    }
    const pageText = await response.text();
    state.requests[newPage] = { state: "ok", pageText };
  } catch (e) {
    state.requests[newPage] = { state: "error", error: e };
  }
}
