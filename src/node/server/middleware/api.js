module.exports = (req, res, next) => {
    // data 是调用res.$success时传入的
    res.$success = (data, code = 200) => {
        const _data = {
            code
        }
        if(typeof data === 'object') {
            _data.data = data;
            _data.msg = 'success';
        } else {
            _data.msg = data
        }
        res.json(_data)
    };
    res.$error = (err, code = 500) => {
        const _data = {
            code
        }
        if(typeof err === 'object') {
            _data.data = JSON.stringify(err);
            _data.msg = 'error';
        } else {
            _data.msg = err
        }
        res.json(_data)
    } 

    next()
}