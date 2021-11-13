class Singleton {
  constructor() {
    this.status = false;
  }

  on() {
    this.status = true;
  }

  off() {
    this.status = false;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const ba1 = Singleton.getInstance();
const ba2 = Singleton.getInstance();

console.log(ba1, ba1 === ba2);

ba1.on();

console.log(ba2, ba1 === ba2);
