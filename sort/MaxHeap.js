class MaxHeap {
    constructor() {
        this.heap = [];
    }
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
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
        if (this.heap[parentIndex] < this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    shiftDown(index) {
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        if (this.heap[left] > this.heap[index]) {
            this.swap(left, index);
            this.shiftDown(left);
        }
        if (this.heap[right] > this.heap[index]) {
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
const arr = [1,3,5,7,2,4,6,8], k = 4 // 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

var smallestK = function (arr, k) {
    if(k < 1) return []

    const heap = new MaxHeap();
    for (const n of arr) {
        heap.insert(n);
        if (heap.size() > k) {
            heap.pop();
        }
    }
    return heap.heap;
};

console.log(smallestK(arr, k));