/*
 * @Author: your name
 * @Date: 2021-07-26 21:45:14
 * @LastEditTime: 2021-07-28 14:12:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /singe_webpack_react/src/react/07fiber-diff/greact/ReactDOM.js
 */
import {PLACEMENT} from './const';

// 下一个子任务
let nextUnitOfWork = null;
// work in progress 工作中的fiber root
let wipRoot = null;

// 现在的根节点
let currentRoot = null;

// 初始化
function render(vnode, container) {
    wipRoot = {
        node: container,
        props: {children: [vnode]},
        base: currentRoot
    }
    nextUnitOfWork = wipRoot;
}

// 根据vnode，创建一个node
function createNode(vnode) {
    const {type, props} = vnode;
    let node;

   if (type === 'TEXT') {
        node = document.createTextNode("") // node: text
    } else if (type) {
        node = document.createElement(type);
    } 

    // 更新节点上属性，如className、nodeValue等
    updateNode(node, props);
    return node;
}

// 更新class组件， 构建fiber
function updateClassComponent(fiber) {
    const {type, props} = fiber;
    // type是个class, 需要new实例化, 再运行render函数得到里面的vnode
    const cmp = new type(props); // 实例化
    const children = [cmp.render()];
    reconcilerChildren(fiber, children);
}
// function组件，返回node
function updateFunctionComponent(fiber) {
    // function组件中的type是个函数
    // 运行type(props)这个函数得到的就是return里面的vnode树
    // 再调用createNode方法创建真实node
    const {type, props} = fiber;
    // 函数组建的type就是一个函数，直接拿来执行可以获得dom元素
    const children = [type(props)];
    reconcilerChildren(fiber, children);
}

// 原生标签 构建fiber
function updateHostComponent(fiber) {
    if (!fiber.node) {
        fiber.node = createNode(fiber) // 创建一个DOM挂载上去
    }
    const {children} = fiber.props;
    reconcilerChildren(fiber, children);
}
   // 更新节点上属性，如className、nodeValue等
function updateNode(node, nextVal){
    // 这里的node是<div></div>这种标签
    Object.keys(nextVal).filter(k => k !== 'children')
    .forEach(k => {
        if (k.slice(0, 2) === 'on') {
            // 以'on'开头,认为是一个事件,源码处理复杂一些，
            let eventName = k.slice(2).toLocaleLowerCase();
            node.addEventListener(eventName, nextVal[k])
        } else {
            node[k] = nextVal[k]
        }
    })
    // console.log('===', node) // <div className='border'></div>
}
// 构建fiber结构，遍历workInProgressFiber 的子节点
function reconcilerChildren(workInProgressFiber, children) {
   // 构建fiber结构
   // 数组
   // 更新 删除 新增
   let preSibling = null;
   let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child;
   for(let i = 0; i < children.length; i++) {
       let child = children[i];
       let newFiber = null;
       // todo 比较type key

       newFiber = {
           type: child.type,
           props: child.props,
           node: null, // 真实dom节点
           base: null, // 存储fiber 便于去比较
           parent: workInProgressFiber,
           effectTag: PLACEMENT
       };

       if (oldFiber) {
           oldFiber = oldFiber.sibling;
       }

       // parent
       // child
       if(i === 0) {
           // 父级的child指向第一个子元素
           workInProgressFiber.child = newFiber;
       } else {
           // 每个子元素拥有指向下一个子元素的指针
           preSibling.sibling = newFiber;
       }
       preSibling = newFiber;
   }
}


// 执行当前任务， 指定下一个任务
function performUnitOfWork(fiber) {
    // 执行当前任务
    // todo

    const {type} = fiber;
    if (typeof type === 'function') {
        console.log('fiber')
        type.isReactComponent
        ? updateClassComponent(fiber)
        : updateFunctionComponent(fiber);
    } else {
        updateHostComponent(fiber)
    }
    // 返回下一个子任务 深度优先遍历
    // 找到下一个任务的原则： 先找子任务--》 sibling
    if(fiber.child) {
        return fiber.child;
    }
    
    let nextFiber = fiber;
    while(nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling;
        }
        nextFiber = nextFiber.parent;
    }
}

function workLoop(deadline) { // isYieldy 为TRUE， work为异步，否则为同步 源码里这里判断了一下
    // 执行子任务
    // 返回下一个子任务
    //...
    while(nextUnitOfWork && deadline.timeRemaining() > 1) {
        // 有下个子任务，并且当前帧还没结束
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }

    // 没有子任务了
    if(!nextUnitOfWork && wipRoot) {
        // commit
        commitRoot();
    }

    // 如果任务没有完成 但是时间到了， 需要继续注册requestIdleCallback
    requestIdleCallback(workLoop)

}

// 代码是从这里开始的， 浏览器空闲时调用workLoop
requestIdleCallback(workLoop);

// 提交
function commitRoot() {
    commitWorker(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
}

// 提交具体的fiber执行
function commitWorker(fiber) {
    if(!fiber) {
        return;
    }

    // 向上查找
    let parentNodeFiber = fiber.parent;
    while(!parentNodeFiber.node) {
        parentNodeFiber = parentNodeFiber.parent;
    }

    const parentNode = parentNodeFiber.node;
    // 更新 删除 新增
    if(fiber.effectTag === PLACEMENT && fiber.node !== null) {
        parentNode.appendChild(fiber.node);
    }
    // 递归操作子元素和兄弟元素
    commitWorker(fiber.child);
    commitWorker(fiber.sibling);
}
export default {
    render
}