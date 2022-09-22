/************
 * 实现person类，先输出hello，停顿两秒之后再输出world
 person.say('hello')
.sleep(2)
.say('world')
.done(); 
 */
class Person {
  constructor() {
    this.tasks = [];
  }
  sleep(delay) {
    this.tasks.push(() => new Promise((resolve, reject) => setTimeout(resolve, delay * 1000)))
    return this
  }
  say(message) {
    this.tasks.push(() => Promise.resolve().then(console.log(message)));
    return this
  }
  async done() {
    for (const item of this.tasks) {
      await item()
    }
  }
}

const person = new Person()
person.say('hello')
  .sleep(2)
  .say('world')
  .done();
