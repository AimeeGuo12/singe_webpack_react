// !vnode代表虚拟dom节点
// !node代表真实dom节点
/**
 * 
 * @param {Object} vnode 就是createElement返回的js对象树,是一个虚拟dom. 
 *                          vnode={type: '', props: {属性, children}}
 * @param {*} container 
 */
function render(vnode, container) {
    // vnode -> node
    // console.log(vnode, container)
    const node = createNode(vnode, container)
    container.appendChild(node);
}

// 根据vnode，创建一个node
function createNode(vnode) {
    const {type, props} = vnode;
    let node = null;

    // 这里是生成的标签
    if (typeof type === 'function') {
        // 包含function组件和class类组件,class组件经编译后是function类型的
        // 用来继承的组件Component 有两种形式,所以isReactComponent可能是type.isReactComponent 或者 type.prototype.isReactComponent
        node = type.isReactComponent  // isReactComponent写到Component组件里,以此来区分
            ? updateClassComponent(vnode)
            : updateFunctionComponent(vnode)
    } else if (type === 'TEXT') {
        node = document.createTextNode("") // node: text
    } else if (type) {
        node = document.createElement(type);
    } else {
        // 针对<>这种
        node = document.createDocumentFragment() // document-fragment
    }

    // 更新节点上属性，如className、nodeValue等
    updateNode(node, props);
    // 处理里面的children
    reconcilerChildren(props.children, node)
    return node;
}

function updateClassComponent(vnode) {
    const {type, props} = vnode;
    // type是个class, 需要new实例化, 再运行render函数得到里面的vnode
    const cmp = new type(props); // 实例化
    const vvnode = cmp.render();
    const node = createNode(vvnode);
    return node;
}
// function组件，返回node
function updateFunctionComponent(vnode) {
    // function组件中的type是个函数
    // 运行type(props)这个函数得到的就是return里面的vnode树
    // 再调用createNode方法创建真实node
    const {type, props} = vnode;
    const vvnode = type(props);
    const node = createNode(vvnode);
    return node;
}

   // 更新节点上属性，如className、nodeValue等
function updateNode(node, props){
    // 这里的node是<div></div>这种标签
    Object.keys(props).filter(k => k !== 'children')
    .forEach(k => {
        if (k.slice(0, 2) === 'on') {
            // 以'on'开头,认为是一个事件,源码处理复杂一些，
            let eventName = k.slice(2).toLocaleLowerCase();
            node.addEventListener(eventName, props[k])
        } else {
            node[k] = props[k]
        }
    })
    // console.log('===', node) // <div className='border'></div>
}

function reconcilerChildren(children, node) {
    for(let i = 0; i < children.length; i++) {
        let child = children[i];
        // 遍历创建元素
        // 判断children[i]类型
        if(Array.isArray(child)) {
            for (let j = 0; j < child.length; j++) {
                render(child[j], node)
            }
        } else {
            render(children[i], node)
        }
    }
}
export default {
    render
}