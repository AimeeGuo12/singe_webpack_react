import React, { useContext, useState, useEffect } from 'react';
// 通过监听window的scroll事件以及对poll元素使用getBoundingClientRect来获取poll元素相对于可视窗口的距离, 从而自己实现一个懒加载方案.
// 在滚动的过程汇总我们还需要注意一个问题就是当用户往回滚动时, 实际上是不需要做任何处理的,所以我们需要加一个单向锁

export default function BigData() {
  const [list, setList] = useState([]);
  // const [prevY, setPrevY] = useState(0);
  // 其中prevY存储的是窗口上一次滚动的距离, 只有在向下滚动并且滚动高度大于上一次时才更新其值.
  let data = [];
  let curPage = 1;
  let pageSize = 16;
  let prevY = 0;
  useEffect(()=> {
    let data = generateBigData()
    setList(data)
  }, [])
  useEffect(() => {
    // let data = generateBigData()
    const getData = debounce(scrollAndLoading, 300)
    window.addEventListener('scroll', getData, false)
    // setList(data)
    return () => {
      window.removeEventListener('scroll', getData, false)
      // generateBigData()
    };
  }, []);

  function scrollAndLoading(){
    if(window.scrollY > prevY) {
      prevY = window.scrollY
      let poll = document.getElementsByClassName('poll')[0]
      if(poll.current.getBoundingClientRect().top <= window.innerHeight) {
        // 请求下一页数据
        console.log('下一页')
        // curPage++
        // setList(searchData.slice(0, pageSize * curPage))
      }
    }
  }
  // 防抖
  function debounce(fn, wait) {
    let timer;
    return function() {
        let context = this
        let args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, wait)
    }
  }
  // 生成指定个数的随机字符串
  function genrateRandomWords(n) {
    let words = 'abcdefghijklmnopqrstuvwxyz你是好的嗯气短前端后端设计产品网但考虑到付款啦分手快乐的分类开发商的李开复封疆大吏师德师风吉林省附近',
      len = words.length,
      ret = ''
    for (let i = 0; i < n; i++) {
      ret += words[Math.floor(Math.random() * len)]
    }
    return ret
  }

  function generateBigData() {
    let list = []
    // 生成10万条数据的list
    for (let i = 0; i < 100000; i++) {
      list.push({
        name: `xu_0${i}`,
        title: genrateRandomWords(12),
        text: `我是第${i}项目, 赶快:cyclone:吧~~`,
        tid: `xx_${i}`
      })
    }
    return list
  }

  // 实现搜索
  const handleSearch = (v) => {
    curPage = 1;
    prevY = 0;
    searchData = data.filter((item, i) => {
    // 采用正则来做匹配, 后期支持前端模糊搜索
    let reg = new RegExp(v, 'gi')
    return reg.test(item.title)
    })
    setList(searchData.slice(0, pageSize * curPage))
  }
  return (
    <div>这是个测试大数据处理的
      <ul>
        {list.map((item)=> {
          return <li key={item.tid}>{item.title}</li>
        })}
      </ul>
      <div className='poll'></div>
    </div>

  );
}
  // 前端自己模拟吧 不起服务了