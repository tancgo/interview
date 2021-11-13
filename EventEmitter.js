class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 订阅
  on(name, cb) {
    if (this.events[name]) {
      this.events[name].push(cb);
    } else {
      this.events[name] = [cb];
    }
  }

  // 发布
  emit(name, ...rest) {
    if (this.events[name]) {
      this.events[name].forEach((cb) => cb.apply(this, rest));
    }
  }

  // 删除
  off(name, cb) {
    if (this.events[name]) {
      this.events[name] = this.events[name].filter((item) => item !== cb);
    }
  }

  // 只执行一次订阅事件
  once(name, cb) {
    function fn() {
      cb();
      this.off(name, fn);
    }
    this.on(name, fn);
  }
}

const even = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

even.on("click", handle);

even.emit("click", 1, 2, 3, 4);

even.off("click", handle);

even.emit("click", 1, 2);

even.once("dbClick", () => {
  console.log(123456);
});
even.emit("dbClick");
even.emit("dbClick");