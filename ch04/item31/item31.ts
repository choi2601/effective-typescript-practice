// 예제 1

// 최솟값이나 최댓값이 0인 경우, 값이 덧씌워지는 문제
// nums 배열이 비었을 경우 [undefined, undefined]
// 반환 타입이 (number | undefined)[] 로 추론
function extent(nums: number[]) {
  let min, max;
  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }
  return [min, max];
}

// 반환 타입이 [number, number] | null
function extent2(nums: number[]) {
  let result: [number, number] | null = null;
  for (const num of nums) {
    if (!result) {
      result = [num, num];
    } else {
      result = [Math.min(num, result[0]), Math.max(num, result[1])];
    }
  }
  return result;
}

const [max, min] = extent2([0, 1, 2])!;
const span = max - min;

const range = extent2([0, 1, 2]);
if (range) {
  const [min, max] = range;
  const span = max - min;
}

// 예제 2

class UserPosts {
  user: UserInfo | null;
  posts: Post[] | null;

  constructor() {
    this.user = null;
    this.posts = null;
  }

  async init(userId: string) {
    return Promise.all([
      async () => (this.user = await fetchUser(userId)),
      async () => (this.posts = await fetchPostsForUser(userId)),
    ]);
  }
}

class UserPosts {
  user: UserInfo;
  posts: Post[];

  constructor(user: UserInfo, post: Post[]) {
    this.user = user;
    this.posts = posts;
  }

  static async init(userId: string): Promise<UserPosts> {
    const [user, posts] = await Promise.all([
      fetchUser(userId),
      fetchPostsForUser(userId),
    ]);
    return new UserPosts(user, posts);
  }
}
