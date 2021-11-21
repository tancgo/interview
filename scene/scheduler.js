// https://juejin.cn/post/6854573217013563405
// JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善下面代码的Scheduler类，使以下程序能够正常输出：

class Scheduler {
  constructor() {
    this.queue = [];
    this.count = 0;
  }
  add(promiseCreator) {
    if (this.count > 1) {
      this.queue.push(promiseCreator);
      return;
    }
    this.next(promiseCreator);
  }
  next(task) {
    this.count++;
    task().then(() => {
      this.count--;
      if (this.count < 2 && this.queue.length) {
        this.next(this.queue.shift());
      }
    });
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// output: 2 3 1 4
