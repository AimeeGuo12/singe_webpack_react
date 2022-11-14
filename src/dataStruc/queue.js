// 队列是限定只能在表的一端进行插入操作，在另一端进行删除操作的线性表。FIFO
// 队尾插入  队头删除 队列和栈一样只允许在断点处插入和删除元素。
// 1. 用 JavaScript 模拟一个单链队列


// push shift 
class Queue {
    constructor() {
        this.queue = []
    }
    enQueue = function(item) {
        return this.queue.push(item)
    }
    delQueue = function() {
        this.queue.shift() // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
    }
    getHeader = function() {
        return this.queue[0]
    }
    getLength = function() {
        return this.queue.length
    }
    isEmpty = function() {
        return this.getLength === 0
    }
}


// 2. 优先队列
// 队列中的每个元素都会有各自的优先级，在插入的时候会根据优先级的高低顺序进行插入操作，
// 和前面队列实现有点不太一样的地方，队列中的元素多了有先级的属性
function PriorityQueue() {
    let items = []
    // 队列元素，多定义一个优先级变量
    function QueueElement(element, priority) { // 定义一个构造函数
      this.element = element
      this.priority = priority
    }
    this.enqueue = function (element, priority) {
      let queueElement = new QueueElement(element, priority)
      let added = false
      for (let i = 0; i < items.length; i++) {
        //数字越小优先级越高
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        items.push(queueElement)
      }
    }
    this.dequeue = function () {
      return items.shift()
    }
    this.front = function () {
      return items[0]
    }
    this.isEmpty = function () {
      return items.length === 0
    }
    this.size = function () {
      return items.length
    }
    this.print = function () {
      for (let i = 0; i < items.length; i++) {
        console.log(`${items[i].priority}-${items[i].element}`)
      }
    }
  }
  let priorityQueue = new PriorityQueue()
  priorityQueue.enqueue('a', 3)
  priorityQueue.enqueue('b', 2)
  priorityQueue.enqueue('c', 1)
  priorityQueue.dequeue()
  priorityQueue.print()
//   入队时如果队列为空直接加入队列，否则进行比较，priority小的优先级高，优先级越高放在队列的越前面

// 3. 循环
// 因为单链队列在出队操作的时候需要 O(n) 的时间复杂度，所以引入了循环队列。
// 循环队列的出队操作平均是 O(1) 的时间复杂度。
// 可扩充循环队列 ？？？
class SqQueue{
    constructor(length) {
        this.queue = new Array(length+1)
        // 队头
        this.first = 0
        // 队尾
        this.last = 0
        // 当前队列大小
        this.size = 0
    }

    enQueue = function(item) {
         // 判断队尾 + 1 是否为队头
        // 如果是就代表需要扩容数组
        // % this.queue.length 是为了防止数组越界
        // qu = 6;  first = 0; last = 5;  5+1=6  6%6 = 1
        if(this.first === (this.last+1)%this.queue.length) {
            this.resize(this.getLength() * 2 + 1)
            this.queue[this.last] = item
            this.size++
            this.last = (this.last + 1) % this.queue.length
        }
    }
    deQueue = function() {
        if (this.isEmpty()) {
          throw Error('Queue is empty')
        }
        let r = this.queue[this.first]
        this.queue[this.first] = null
        this.first = (this.first + 1) % this.queue.length
        this.size--
        // 判断当前队列大小是否过小
        // 为了保证不浪费空间，在队列空间等于总长度四分之一时
        // 且不为 2 时缩小总长度为当前的一半
        if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
          this.resize(this.getLength() / 2)
        }
        return r
      }
      getHeader = function() {
        if (this.isEmpty()) {
          throw Error('Queue is empty')
        }
        return this.queue[this.first]
      }
      getLength = function() {
        return this.queue.length - 1
      }
      isEmpty = function() {
        return this.first === this.last
      }
    resize = function(length) {
        let q = new Array(length)
        for (let i = 0; i < length; i++) {
            q[i] = this.queue[(i + this.first)%this.queue.length]
            
        }
        this.queue = q
        this.first = 0
        this.last = this.size
    }
}

// 给定一个数，然后迭代队列，从队列开头移除一项，然后再将其加到队列末尾，当循环到给定数字时跳出循环，从队首移除一项，直至剩余一个元素
function Queue() {
    let items = []
    this.enqueue = function (element) {
      items.push(element)
    }
    this.dequeue = function () {
      return items.shift()
    }
    this.front = function () {
      return items[0]
    }
    this.isEmpty = function () {
      return items.length === 0
    }
    this.size = function () {
      return items.length
    }
    this.print = function () {
      console.log(items.toString())
    }
  }
  function loopQueue(list, num) {
    let queue = new Queue()
    for (let i = 0; i<list.length; i++) {
      queue.enqueue(list[i])
    }
    while (queue.size() > 1) {
      for (let j = 0; j<num; j++) {
          //将第num个前面的数依次从对队尾插入
        queue.enqueue(queue.dequeue())
      }
      //删除n个数
      let out = queue.dequeue()
      console.log('出队列：' + out)
    }
    //返回剩余的一个数
    return queue.dequeue()
  }
  console.log('last：' + loopQueue(['a', 'b', 'c', 'd', 'e'], 3))

  // 不用队列
  function circleQueue(arr,n){
	while(arr.length>1){
		for(var i=0;i<n-1;i++){
			arr.push(arr.shift());	
		}
		arr.shift();
	}
	console.log(arr[0]);
}
