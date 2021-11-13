Promise.prototype._finally = function (cb) {
  return this.then(
    (value) => Promise.resolve(cb()).then(() => value),
    (reason) =>
      Promise.resolve(cb()).then(() => {
        throw reason;
      })
  );
};

/*********************** 测试 ***********************/
const p = new Promise((resolve, reject) => {
  console.info("starting...");

  setTimeout(() => {
    Math.random() > 0.5 ? resolve("success") : reject("fail");
  }, 1000);
});

// 正常顺序测试
p.then((data) => {
  console.log(`%c resolve: ${data}`, "color: green");
})
  .catch((err) => {
    console.log(`%c catch: ${err}`, "color: red");
  })
  ._finally(() => {
    console.info("finally: completed");
  });

// finally 前置测试
p._finally(() => {
  console.info("finally: completed");
})
  .then((data) => {
    console.log(`%c resolve: ${data}`, "color: green");
  })
  .catch((err) => {
    console.log(`%c catch: ${err}`, "color: red");
  });
