function throttle(fn, delay) {
  let timer = null;

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, delay);
    }
  };
}

// type Pratical<T> = {[P in keyof T]?: t[p]} 将传入的属性变为可选
// type Required<T> = { [P in keyof T]-?: T[P] }
