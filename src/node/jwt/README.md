## 安装 jsonwebtoken
使用这个 npm 包提供的方法:
1. 对 json 对象进行签名生成 token
  - jwt = require('jsonwebtoken');   
  - jwt.sign({name:'jack'},'mima')   //sign 方法第一个参数是一个 json 对象, 
//第二个参数是个密钥
//然后生成一串两个点分割的字符串. 这就是 token, 可以把它传到客户端.以后客户端的每个请求都
//拿着这个 token 传给服务端. 

2. 逆向操作把 token 进行验证
//然后服务端要进行验证, 使用 verify 方法, 第二个参数是密钥
jwt.verify(token, 'mima')
