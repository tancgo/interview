//使用react hooks带来的收益抵得过使用它的成本吗? - 魔术师卡颂的回答 - 知乎
// https://www.zhihu.com/question/350523308/answer/2472329156
function useEvent(handler) {
  const handlerRef = useRef(null);

  // 视图渲染完成后更新`handlerRef.current`指向
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  // 用useCallback包裹，使得render时返回的函数引用一致
  return useCallback((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}
