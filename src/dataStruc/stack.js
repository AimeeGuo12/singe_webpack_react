// 栈
// 线性表 只能在表的一端进行插入或删除操作 LIFO 先入后出，后入先出
// 表尾这一端被称为栈顶!!!所以用得是push和pop，相反地另一端被称为栈底，向栈顶插入元素被称为进栈、入栈、压栈，从栈顶删除元素又称作出栈

// 模拟栈
class Stack {
    constructor() {
        this.stack = []
        let stack1 = []
    }

    push = function(item) {
        this.stack.push(item) // 添加一个（或几个）新元素到栈顶
    }

    pop = function() {
       return this.stack.pop() //移除栈顶的元素，同时返回被移除的元素
    }
    // stack.peek返回的是一个值，相当于获取一个数，
    // 但是stack.pop会在这个stack里面删除一个元素。
    peek = function() {
        return this.stack[this.getCount() - 1]
    }
    getCount = function() {
        return this.stack.length
    }

    empty = function() {
        return this.getCount() === 0
    }
    isEmpty = function () {//如果栈里没有任何元素就返回true，否则返回false
        return this.stack.length;
    }
    clear = function () {//移除栈里的所有元素
        this.stack = [];
    }
    size = function () {//返回栈里的元素个数
        return this.stack.length;
    }
    print = function () {
        console.log(this.stack.toString());
    }
}

// 应用
// 1. 使用栈进行括号匹配  不明白


const isValid = function (s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }

    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(map[s[i]])
        } else {
            if (map[s[i]] + stack.pop() !== 0) return false
        }
    }
    return stack.length === 0 ? true : false
}

// 2. 数制转换
// 加个参数base 将2换成这个base就可以实现将数字转化为二至九进制的数字
function tenBytwo(number) {
    let stack = new Stack(), remainder, Binary = '';
    while(number > 0) {
        remainder = Math.floor(number%2);
        number = Math.floor(number/2)
        stack.push(remainder)
    }

    while(!stack.empty()) {
        Binary += stack.stack.pop();
    }
    console.log(Binary)
}

// 3. 回文
// 回文是指这样一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的。
function isPalindrome(word) {
    let stack = new Stack;
    for(let i = 0; i<=word.length - 1; i++) { // 字符串 用不了map
        stack.push(word[i])
    }
    let rword = ''
    while(stack.stack.length > 0) {
        rword += stack.pop()
    }
    console.log(rword)
    if (word === rword) {
        return true
    } else {
        return false
    }
}

// 4. 使用栈模拟递归过程
function fact(n){
    var s = new Stack();
    while(n > 1){
        s.push(n--);
    }

    var product = 1;
    while(s.stack.length > 0){
        product *= s.pop();
    }
    return product;
}

// 5. 逆波兰
function rePoland(arr){
    var stack = new Stack();
    for(var i=0; i<arr.length; i++){
        if(typeof(arr[i]) == 'number'){
            stack.push(arr[i]);
        }
        else if(arr[i] == '+'){
            // 相邻两个数字，先拿出最后一个，再拿出倒数第二个 然后相加结果保存
            stack.push(stack.pop() + stack.pop()); 
        }
        else if(arr[i] == '-'){
            // var a = stack.peek();
            // stack.pop();
            // var b = stack.peek();
            // stack.push(b - a);
            
            let a=stack.pop();
            let b=stack.pop();
            let c=b-a;
            stack.push(c);

        }
        else if(arr[i] == '*'){
            stack.push(stack.pop() * stack.pop());
        }
        else{
            var a = stack.peek();
            stack.pop();
            var b = stack.peek();
            stack.push(b / a);
        }
    }
    console.log(stack.pop());
}
window.onload = function () {
    let rs = isValid('({})')
    console.log(rs)
    tenBytwo(133)

    console.log(isPalindrome('ssxxss'))
    console.log(fact(6))
    let arr = [1,2,'+',3,4,'-','*'];  // 3*(3-4) = -3
    rePoland(arr);
}