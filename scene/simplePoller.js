async function simplePoller(queryFn, callback) {
  let time = 1000;
  const rate = 2;

  do {
    await sleep(time);
    console.log(time);
    time = time * rate;
  } while (!queryFn());

  callback();
}

function callback() {
  console.log("退出");
}

function queryFn() {
  const ans = Math.random() > 0.5;
  console.log(ans);
  return ans;
}

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

simplePoller(queryFn, callback);
