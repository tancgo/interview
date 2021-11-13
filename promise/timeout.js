function request(url, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, delay);
  });
}

function rejectTime(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("请求超时");
    }, delay);
  });
}

const timeout = (url, delay = 2000) => {
  return Promise.race([request(url, 3000), rejectTime(delay)])
    .then((value) => {
      console.log(value, "value");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

timeout(2, 4000);
timeout(1);
