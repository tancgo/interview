//  基础版本
function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// hook版本
function useDebounce(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(function () {
    current.fn = fn;
  }, [fn]);

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep)
}