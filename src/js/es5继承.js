function Parent(name) {
    this.name = name;

}
Parent.prototype.getName = function() {
    return this.name;
}

// 继承1： 原型链继承 让子类的原型对象指向父类实例
function Child1() {

}
Child1.prototype = new Parent();

// 继承2： 构造函数继承
function Child2 () {
    let name = 'ccc';
    Parent.call(this, name)
}

// 继承3： 组合继承

function Child3 () {
    let name = 'ccc'
    Parent.call(this, name)
}
Child3.prototype = new Parent();
Child3.prototype.constructor = Child3;

// 继承4： 寄生
function Child4 () {
    let name = 'ccc'
    Parent.call(this, name)
}
Child4.prototype = Object.create(Parent.prototype) 
