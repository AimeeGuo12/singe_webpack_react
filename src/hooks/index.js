import React, {useState, useRef, useEffect} from 'react';

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