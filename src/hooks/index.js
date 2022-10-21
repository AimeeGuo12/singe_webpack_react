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
export default IndexDemo



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
