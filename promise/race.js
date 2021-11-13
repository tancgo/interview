Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  reject(2);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

Promise.myRace([p1, p2]).then(
  (value) => {
    console.log(value, "value");
  },
  (reason) => {
    console.log(reason, "reason");
  }
);

Promise.myRace([p1, p3]).then(
  (value) => {
    console.log(value, "value");
  },
  (reason) => {
    console.log(reason, "reason");
  }
);
