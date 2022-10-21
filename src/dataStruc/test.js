var generateParenthesis = function(n) {
    if(n===1) return ["()"]
    const res = []
    // 左右括号所剩下的数量，str是当前构建的
    const dfs = (lRemain, rRemain, str) => {
        console.log(lRemain, rRemain, str)
        if (str.length == 2*n) {
            console.log(str)
            res.push(str);
            return; 
        }

        if(lRemain > 0) { // 只要左边括号有剩下的就可以选
           dfs(lRemain - 1, rRemain, str + '(')  
        }

        if(lRemain < rRemain) { // 右边的括号多于左边时才能选
            dfs(lRemain, rRemain - 1, str + ')')
        }
    }
    console.log('hhh')
    dfs(n, n, '') 
    return res;
};

console.log(generateParenthesis(2))