// 图
const graph = {
  0: [1, 4],
  1: [2, 4],
  2: [2, 3],
  3: [],
  4: [3],
}
// 深度优先遍历
const visited = [] 
const dfs = (n) => {
  console.log(n) 
  visited.add(n)// 访问过添加记录
  graph[n].forEach(c => {
    if(!visited.has(c)) {
      dfs(c)
    }
  })
}

// 广度优先遍历
// 新建一个队列，把根节点入队
// 把队头出队并访问
// 把队头的没访问过的相邻节点入队
// 重复二、三步骤，直到队列为空
const visited1 = new Set()
const dfs2 = (n) => {
  visited.add(n) 
  const q = [n]
  while(q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach((c) => {
      if(!visited.has(c)) {
        q.push(c)
        visited.add(c)
      }
    })
  }
}
