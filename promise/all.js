Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const values = [];
    let count = 0;

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          values[i] = value;
          count++;
          if (count === promises.length) {
            resolve(values);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
};

const p1 = new Promise((resolve, reject) => {
  resolve(1);
});
const p2 = new Promise((resolve, reject) => {
  resolve(2);
});
const p3 = new Promise((resolve, reject) => {
  reject(3);
});

Promise.myAll([p1, p2]).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);

Promise.myAll([p1, p2, p3]).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
