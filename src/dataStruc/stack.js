// 栈
// 线性表 只能在表的一端进行插入或删除操作 LIFO

// 模拟栈
class Stack{
    constructor() {
        this.stack=[]
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        this.stack.pop()
    }
    // stack.peek返回的是一个值，相当于获取一个数，
    // 但是stack.pop会在这个stack里面删除一个元素。
    peek() {
        return this.stack[this.getCount()-1]
    }
    getCount () {
        return this.stack.length
      }
    
      empty () {
        return this.getCount() === 0
      }
}

// 应用
// 使用栈进行括号匹配


const isValid = function(s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }

    let stack = []
    for (let i = 0; i<s.length; i++ ) {
        if(map[s[i]] <0) {
            stack.push(map[s[i]])
        } else {
            if(map[s[i]] + stack.pop() !== 0) return false
        }
    }
    return stack.length === 0? true : false
}