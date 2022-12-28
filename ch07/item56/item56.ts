// 예제 1

class Foo {
  _private = "secret";
}

const f = new Foo();
f._private;

class Dirary {
  private secret = "secret";
}

const diary = new Dirary();
diary.secret;

declare function hash(text: string): number;

class PasswordChecker {
  checkPassword: (password: string) => boolean;
  // passwordHash가 외부에서 접근 불가능(은닉화)
  constructor(passwordHash: number) {
    this.checkPassword = (password: string) => {
      return hash(password) === passwordHash;
    };
  }
}

const checker = new PasswordChecker(hash("secret"));
checker.checkPassword("secret");
