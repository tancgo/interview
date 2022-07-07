// LRU 英文全称是 Least Recently Used，英译过来就是”最近最少使用“的意思。
// 假如我们有一块内存，专门用来缓存我们最近发访问的网页，访问一个新网页，我们就会往内存中添加一个网页地址
// 随着网页的不断增加，内存存满了，这个时候我们就需要考虑删除一些网页了。这个时候我们找到内存中最早访问的那个网页地址，然后把它删掉。
// 这一整个过程就可以称之为 LRU 算法。
// Least Recently Used最近最少使用算法
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.cache.has(key)) {
      const val = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, val);
      console.log(val)
      return val;
    }
    console.log(-1)
    return -1;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size === this.capacity) {
        const oldKey = this.cache.keys().next().value;
        this.cache.delete(oldKey);
      }
    }
    this.cache.set(key, value);
    console.log(this.cache);
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
