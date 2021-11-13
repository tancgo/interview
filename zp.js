class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.count = 0;
    this.queue = [];
  }

  add(value) {
    this.queue.push(async () => {
      console.log(value, "start");
      //   this.count++;
      await request(value);
      //   this.count--;
      console.log(value, "end");
      if (this.queue.length) {
        this.next();
      }
    });
  }

  next() {
    this.queue.shift()();
  }

  start() {
    const tasks = this.queue.splice(0, this.limit);
    tasks.forEach((task) => task());
  }
}

function request(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(url), Math.random() * url);
  });
}

const schedule = new Scheduler(2);

schedule.add(5);
schedule.add(1);
schedule.add(2);
schedule.add(1);

// console.log(schedule.queue);
schedule.start();
