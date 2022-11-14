const express = require('express')
const Template = require('../model/template')
const router = express.Router()

// REST template APIs

router.get('/template', async(req, res) => {
    // update_at:查询列表排序：ORDER BY  update_atDESC  ,通过时间降序排，最后更新的内容在前面。
    const temps = await Template.find({}).sort({update_at: -1})

    // res.join({
    //     code: 200,
    //     msg: 'success',
    //     data: temps
    // })
    res.$success(temps)
})

router.post('/template', async(req, res) => {
    // req.body
    try {
        const temp = await Template.create(req.body) // 写入数据库
        res.$success(temp)
    } catch (error) {
        res.$error(error)
    }

})

router.get('/template/:id', async(req, res) => {

    const temp = await Template.findById({_id: req.params.id})
    if(temp) {
        res.$success(temp)

    } else {
        res.$success({}, 400)
    }
})
router.put('/tempate/:id', async(req, res) => {
    const temp = await Template.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, {new: true})
    if (temp) {
        res.$success(temp)

    } else {
        res.$error('update fail',  400)
    }
})

router.put('/tempate/:id', async(req, res) => {
    const temp = await Template.findByIdAndRemove({
        _id: req.params.id
    })
    try {
        res.$success('delete success')
    } catch (error) {
        res.$error(error)
        
    }
})
module.exports=router