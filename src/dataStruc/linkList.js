// 链表
// 链表是一个线性结构，同时也是一个天然的递归结构。链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。


class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 遍历
let current = head;
while(current) {
  console.log(current.val) 
  current = current.next
}
// 链表插入删除效率极高，达到O(1)
// 插入val
// 找到插入得位置postion 添加node链表节点
while(current < position) {
  previous = current;
  current = current.next
}

previous.next = node
node.next = current

// 删除
while (current != node){
  pervious = current;
  current = current.next;
  nextNode = current.next;
}
pervious.next = nextNode

// 应用场景： 缓存
