import React, {useState, useRef, useEffect, useMount} from 'react';

function IndexDemo() {
    const [count, setCount] = useState(0);
    const dom = useRef(null);
    useEffect(() => {
        dom.current.addEventListener('click', () => setCount(count + 1));
      }, []);
    return (
        <div>
            <p>数据呢</p>
            <p>{count}</p>
            <button ref={dom}></button>
        </div>
    )
}
// export default IndexDemo



export function IndexDemo1() {
    const [num, setNum] = useState(0);
    const add = () => setNum(count+1)
    useMount(() => {
        setInterval(() => {
            console.log(num, 'count in setInterval')
        }, 1000)
    })
    useEffect(() => {
        // dom.current.addEventListener('click', () => setCount(count + 1));
        return() => {
            console.log(num)
        }
    }, []);
    return (
        <div>
            <button onClick={add}>点击</button>
            <p>数据呢</p>
            <p>{num}</p>
            {/* <button ref={dom}></button> */}
        </div>
    )
}


import React, { Component } from 'react';

export class UnControll extends Component {
  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleSubmit = (e) => {
    console.log('我们可以获得input内的值为', this.inputRef.current.value);
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input defaultValue="lindaidai" ref={this.inputRef} />
        <input type="submit" value="提交" />
      </form>
    )
  }
}
