/*
 * @Author: your name
 * @Date: 2021-07-26 21:45:14
 * @LastEditTime: 2021-07-28 16:42:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /singe_webpack_react/src/react/07fiber-diff/greact/ReactDOM.js
 */
import {DELETIONS, PLACEMENT, UPDATE} from './const';

// 下一个子任务
let nextUnitOfWork = null;
// work in progress 工作中的fiber root
let wipRoot = null;

// 现在的根节点
let currentRoot = null;
let deletions = []; // 创建一个收集需要删除节点的数组

// // 实现useState
// // let state = null; // 这个只能处理一个usestate
// // 多个usestate 按顺序放入数组中 通过下标来访问 
// let state = [];
// let hookIndex = 0;
// export function useState(init) {
//     const currentIndex = hookIndex;
//     state[currentIndex] = state[currentIndex] === undefined? init: state[currentIndex];
//     // 修改state的方法
//     const setState = value => {
//         state[currentIndex] = value;

//         // 只要修改了state， 就要重新处理节点
//         wipRoot = {
//             node: currentRoot.node,
//             props: currentRoot.props,
//             base: currentRoot
//         }

//         // 修改nextUnitOfWork指向wip, 这样下次就不会处理这个节点了
//         nextUnitOfWork = wipRoot;
//         deletions = []
//     }
//     hookIndex++;
//     return [state[currentIndex], setState]
// }

// 多个组件都来操作这个全局变量时，就会相互污染，所以数据不能都存到全局变量上， 而是应该存到
// 每个fiber节点上，处理这个节点的时候再将状态放到全局变量用来通讯：

// 申明两个全局变量，用来处理useState
// wipFiber是当前的函数组件的fiber
// hookindex是当前函数组件内部useState状态计数
let wipFiber = null;
let hookIndex = null;

// hooks队列放到fiber上了， 所以useState取之前的值时 需要从fiber.base上取
export function useState(init) {
    // 第一次进来用init赋值
    let oldHook = wipFiber.base && wipFiber.base.hooks && wipFiber.base.hooks[hookIndex];
    const hook = {state: oldHook? oldHook.state: init, queue: []} // state是每个具体的值
    const actions = oldHook? oldHook.queue : [];
    actions.forEach(action => (hook.state = action))
    const setState = action => {
        hook.queue.push(action);

        // 只要修改了state， 就要重新处理节点
        wipRoot = {
            node: currentRoot.node,
            props: currentRoot.props,
            base: currentRoot
        }

        // 修改nextUnitOfWork指向wip, 这样下次就不会处理这个节点了
        nextUnitOfWork = wipRoot;
        deletions = []
    }
    // 将所以useState调研按顺序存到fiber节点上
    wipFiber.hooks.push(hook);
    hookIndex++;
    // 下一次进来就要更新了
    return [hook.state, setState]
}

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
    updateNode(node, {}, props);
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

    // 因为useState只能函数中用，这里初始化useState变量
    wipFiber = fiber;
    hookIndex = 0;
    wipFiber.hooks = [] // hooks用来存储具体的state序列
     
    const {type, props} = fiber;
    // 函数组建的type就是一个函数，直接拿来执行可以获得dom元素
    const children = [type(props)];
    reconcilerChildren(fiber, children);
}

// Fragment 
function updateFragmentComponent(fiber) {
    const {children} = fiber.props;
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
function updateNode(node, preVal, nextVal){
    // 过滤children属性
    // 老的存在，新的没了，取消
    // 新的存在， 老的没了， 新增
    Object.keys(preVal).filter(k => k !== 'children')
    .filter(k => !(k in nextVal)) // 老的存在 新的没有
    .forEach(k => {
        if (k.slice(0, 2) === 'on') {
            // 以'on'开头,认为是一个事件,源码处理复杂一些，
            let eventName = k.slice(2).toLocaleLowerCase();
            node.removeEventListener(eventName, preVal[k], false)
        } else {
            node[k] = ''
        }
    })

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
   // 这里的构建是按照顺序，没有考虑移动位置等等
   // 更新 删除 新增
   let preSibling = null;
   let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child;
   for(let i = 0; i < children.length; i++) {
       let child = children[i];
       let newFiber = null;
       // 比较type key
       // 判断类型是不是一样的
        const sameType = oldFiber && child && oldFiber.type === child.type;
       if(sameType) {
           // 类型一样 复用节点 更新props
           // update
           newFiber = {
               type: oldFiber.type,
               props: child.props,
               node: oldFiber.node,
               base: oldFiber,  // 这个字段为alternate 记录上次状态 更新后将其与新状态做diff
               parent: workInProgressFiber,  // return
               effectTag: UPDATE
           }
       } else if(child) { // 类型不一样，有新节点
        newFiber = {
            type: child.type,
            props: child.props,
            node: null, // 真实dom节点
            base: null, // 存储fiber 便于去比较
            parent: workInProgressFiber,
            effectTag: PLACEMENT
        };
       } else if(!child && oldFiber) { // 没有新节点 有老节点 删除老节点
            oldFiber.effectTag = DELETIONS;
            deletions.push(oldFiber);
       }
        

       if (oldFiber) {
           oldFiber = oldFiber.sibling;
       }

       // parent
       // child  形成链表结构
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
    } else if(type){
        updateHostComponent(fiber)
    }else {
        updateFragmentComponent(fiber);
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

// 调度diff或者是渲染任务
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

// 提交 commit阶段是处理真正的dom，具体的操作根据effectTag来判断
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
    // 函数组件没有dom元素，需要向上找真正的DOM， 删除的时候递归向下找真正的节点
    while(!parentNodeFiber.node) {
        parentNodeFiber = parentNodeFiber.parent;
    }

    const parentNode = parentNodeFiber.node;
    // 更新 删除 新增
    if(fiber.effectTag === PLACEMENT && fiber.node !== null) {
        parentNode.appendChild(fiber.node);
    } else if(fiber.effectTag === DELETIONS) {
        // parentNode.removeChild(fiber.node);
        // 修改
        commitDelete(fiber, parentNode)
    } else if (fiber.effectTag === UPDATE && fiber.node !== null) {
        updateNode(fiber.node, fiber.base.props, fiber.props);
        parentNode.appendChild(fiber.node)
    }
    // 递归操作子元素和兄弟元素
    commitWorker(fiber.child);
    commitWorker(fiber.sibling);
}

function commitDelete(fiber, domParent) {
    if(fiber.node) {
        // 普通节点
        domParent.removeChild(fiber.node);
    } else {
        // node不存在 是函数组件 向下递归找真实dom
        commitDelete(fiber.child, domParent)
    }
}
export default {
    render
}