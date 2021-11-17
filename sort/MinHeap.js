class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
   // 获取父级，左右子节点的index存在如下规律
  /**
   *
   *      0
   *   1      2
   * 3   4  5   6
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    if (this.heap[left] < this.heap[index]) {
      this.swap(left, index);
      this.shiftDown(left);
    }
    if (this.heap[right] < this.heap[index]) {
      this.swap(right, index);
      this.shiftDown(right);
    }
  }
  insert(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶 为了避免堆的结构不被破坏 将最后一个元素移到堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peak() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

// 215. 数组中的第K个最大元素 输入: [3,2,1,5,6,4] 和 k = 2 输出: 5
const nums = [3, 2, 1, 5, 6, 4],
  k = 2;

var findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  for (const n of nums) {
    heap.insert(n);
    if (heap.size() > k) {
      heap.pop();
    }
  }
  console.log(heap);
  return heap.peak();
};

console.log(findKthLargest(nums, k));
