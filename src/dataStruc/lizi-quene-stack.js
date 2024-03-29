// 有效得括号

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length % 2 === 1) return false;
  const stack = [];
  for(let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '(' || c === '{' || c === '[') {
          stack.push(c)
      } else {
          const t = stack[stack.length -1]
          if(
              (t === '(' && c === ')') ||
              (t === '{' && c === '}') ||
              (t === '[' && c === ']')
          ){
              stack.pop()
          } else {
              return false
          }
      }
  }
  return stack.length === 0;
};