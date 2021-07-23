// babel以后。jsx就变为createElement(type, props, ...children) 这种形式，
// 其返回值是一个js对象树，就是所谓的虚拟DOM

//! vnode代表虚拟dom节点
//！ node代表真实dom节点

// 接收type, props, ...children 返回一个vnode
// props里面一般是属性如样式，点击事件等 {className: "border", key: 3}
function createElement(type, props, ...children) {
    // console.log("createElement", arguments); //sy-log
    if (props) {
        delete props.__source;
        delete props.__self;
    }
    // Resolve default props
    if (type && type.defaultProps) {
        const defaultProps = type.defaultProps;
        for (let propName in defaultProps) {
            if (!props) props = {}
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
            }
        }
    }
    return {
        type: type,
        props: {
            ...props,
            //!这里的处理与源码稍有不同，源里的话，只有一个元素，children是对象，多于一个的时候，是数组
            children: children.map(child =>
                typeof child === "object" ? child : createTextNode(child)
            )
        }
    };
}

function createTextNode(text) {
    return {
        type: "TEXT",
        props: {
            children: [],
            nodeValue: text
        }
    };
}
export default {
    createElement
};
