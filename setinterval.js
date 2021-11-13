function interval(fn, wait) {
  let timer = null;
  function inside() {
    fn();
    timer = setTimeout(inside, wait);
  }

  setTimeout(inside, wait);

  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}

a = interval(() => {
  console.log(1);
}, 1000);

a.cancel()