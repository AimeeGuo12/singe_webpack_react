const app = require('../routes/template');
const request = require('supertest')(app);
const assert = require('power-assert');
const temp = {
    name: 'mocha-test',
    template: "<h2>hello ${name}</h2>",
    data: "{name: 'mocha'}"
}
describe('# test routes', function() {
    it('GET /xhr/v1/template', done => {
        request.get('/xhr/v1/template').expect(200)
        .end((err, res) => {
            if(err) return done(err)
            assert(res.body.code === 200);
            assert(res.body.msg === 'success')
            assert(Array.isArray(res.body.data), '返回数据应该为数组')
            done()
        })
    })

    it('POST /xhr/v1/template', done => {
       
        request.post('/xhr/v1/template').expect(200)
        .end((err, res) => {
            if(err) return done(err)
            assert(res.body.code === 200);
            assert(res.body.msg === 'success')
            assert(typeof res.body.data === 'object', '返回数据应该为数组')
            assert(res.body.data.name === temp.name, '需返回新增的模板内容')
            assert(res.body.data._id !== undefined, '数据必须有id')
            
            done()
        })
    })

    it('GET /xhr/v1/template/:id', done => {
        request.get('/xhr/v1/template/someid').expect(200)
        .end((err, res) => {
            if(err) return done(err)
            assert(res.body.code === 200);
            assert(res.body.msg === 'success')
            assert(typeof (res.body.data) === 'object', '返回数据应该为对象')
            assert(res.body.data.name === 'test', '返回数据应该与数据库中一致')
            done()
        })
    })
    it('GET /xhr/v1/template/:id bad id', done => {
        request.get('/xhr/v1/template/someid').expect(200)
        .end((err, res) => {
            if(err) return done(err)
            assert(res.body.code === 400);
            assert(res.body.msg === 'success')
            assert(typeof (res.body.data) === 'object', '返回数据应该为对象')
            done()
        })
    })

    it('PUT /xhr/v1/template/:id', done => {
        request.put('/xhr/v1/template/someid', temp)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err)
            assert(res.body.code === 200);
            assert(res.body.msg === '修改成功')
            assert(typeof (res.body.data) === 'object', '返回数据应该为对象')
            assert(res.body.data.name === 'test', '返回数据应该与数据库中一致')
        })
    })
    it('DELETE /xhr/v1/template/:id', done => {
        request.delete('/xhr/v1/template/someid', temp)
        .expect(200)
        .end((err, res) => {
            if(err) return done(err)
            assert(res.body.code === 200);
            assert(res.body.msg === '删除成功')
        })
    })

})