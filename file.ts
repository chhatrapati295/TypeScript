type T = number;
const myFunc = <T>(a: T): T => {
  return a;
};

const ans = myFunc<T>(2);
