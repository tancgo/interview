// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}

function compose(...rest) {
  if (rest.length === 0) {
    return (arg) => arg;
  }

  if (rest.length === 1) {
    return rest[0];
  }

  return rest.reduce(
    (acc, fn) =>
      (...args) =>
        acc(fn(...args))
  );
}

const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
