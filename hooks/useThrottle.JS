// BAISC
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

// HOOK
function useThrottle(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(function () {
    current.fn = fn;
  }, [fn]);

  return useCallback(function f(...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, dep);
}