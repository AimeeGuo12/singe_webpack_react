import react, {Component} from 'react';

const foo = Comp => props => {
    return (
        <div >
            <Comp {...props}>高阶组件</Comp>
        </div>
    )
}

