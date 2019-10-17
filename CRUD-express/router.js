var express = require('express')
var fs = require('fs')
var Student = require('./student')

// Student.updateById({
//     id: 1,
//     name: "Jing"
// },function(err){
//     if(err){
//         return console.log("修改失败")
//     }
//     console.log("修改成功")
// })

var router = express.Router()
// 公共public目录
router.use('/public/',express.static('./public'))

// 公共node-modules目录
router.use('/node_modules/',express.static('./node_modules'))

router.get('/students',function(req, res){
    // 使用封装的student.js中的查找文件方法
    Student.find(function(err, students){
        if(err){
            return res.status(500).send('Server error')
        }
        res.render('index.html',{
            students: students
        })
    })
})

router.get('/students/new',function(req, res){
    res.render('new.html')
})

router.post('/students/new',function(req, res){
    // 利用bodyparser插件获取到post提交过来的表单内容
    console.log(req.body)
    // 将post提交过来的表单内容存储
    // （此处使用的文件类型的存储.json，所有要先将文件中的内容读取出来，
    // 然后将其转换为对象，然后将内容插入到对象中，再将对象存储到文件中）
    Student.save(req.body, function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })

})
router.post('/students',function(req, res){
    
})
// 渲染编辑学生页面
router.get('/students/edit',function(req, res){
    // 1.在客户端的列表页中处理链接问题
    //      （删除以及修改都是根据id来操作的，因此
    //      <a href="/students/edit?id={{ $value.id }}">编辑</a>
    //      <a href="/students/delete?id={{ $value.id }}">删除</a>）
    // 2.获取要编辑的学生的id
    // 3.渲染边界页面
    //      根据学生的id将学生信息查出来（再次封装异步函数查询单个学生信息【findById】）
    //      然后将学生信息渲染到页面上
    var id = parseInt(req.query.id)  //将url回去的字符串转化为数字
    Student.findById(id, function(err, student){
        if(err){
            return res.status(500).send('Server error')
        }
        console.log(student)
    })
})
router.post('/students/edit',function(req, res){
    
})
router.get('/students/delete',function(req, res){
    
})



module.exports = router
