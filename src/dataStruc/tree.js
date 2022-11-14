// 二叉树
// 二叉树满足以下两个条件：
// 本身是有序树
// 树中包含的各个结点的不能超过 2，即只能是 0、1 或者 2

// 前序遍历： 根节点  左节点，若无左节点，遍历右节点
// 递归版本
const preOrder = (root) => {
  if(!root) return
  console.log(root)
  preOrder(root.left)
  preOrder(root.right)
}

// 非递归   栈
const preOrder1 = (root) => {
  if(!root) return 
  const stack = [root] 
  while(stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if(n.right) {
      stack.push(n.right)
    }
    if(n.left) {
      stack.push(n.left)
    }
  }
}
// https://www.yuque.com/miaomiaobuchiyu/fn6hq2/vdf1y1#CHIWs