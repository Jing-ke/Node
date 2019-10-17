/**
 * Student.js
 * 数据操作文件模块
 * 职责： 操作文件中的数据，只处理数据，不关心业务
 */

var fs = require('fs');
var dbPath= './public/json/db.json'



// 获取学生列表
/* callback()中的参数
第一个参数是 err
    成功是 null
    失败是错误对象
第二个参数是 结果
    成功是 数组
    失败是 undefined
*/

 
exports.find =  function(callback){
     fs.readFile(dbPath, 'utf-8', function(err, data){
        //  文件查找时是否查找到，
        if(err){
            // 查不到时将错误信息传递给callback()
            return callback(err)
        }
        // 当文件查找没有问题时，err为空，将err，以及解析后的json文件传递给callback
        callback(null,JSON.parse(data).students)
     })
 }

//  根据ID获取学生信息
exports.findById =  function(id,callback){
    fs.readFile(dbPath, 'utf-8', function(err, data){
        //  文件查找时是否查找到，
        if(err){
            // 查不到时将错误信息传递给callback()
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function(item){
            return item.id === id
        })
        callback(null, ret)
     })
}

// 添加保存学生

exports.save =  function(student, callback){
     fs.readFile(dbPath, 'utf-8', function(err, data){
         if(err){
            return callback(err)
         }
         var students = JSON.parse(data).students
        //  处理学生的 id ，将内容查出来然后根据内容的最后一项的 id 值加一即可
         student.id = students[students.length -1].id + 1;  
        //  将传递进来的数据添加到数组中
         students.push(student)
        //  将对象数据转换为字符串
         var fileData = JSON.stringify({
             students: students
         })
         fs.writeFile(dbPath,fileData,function(err){
            if(err){
                return callback(err)
            }
            // 成功就没错，传入的err为null
            callback(null)
         })
     })

}

//  更新学生

exports.updateById =  function(student, callback){
    fs.readFile(dbPath,'utf-8', function(err, data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 修改谁找谁（根据ID）
        // ES6中数组方法：find，需要接受一个函数作为参数
        // 遍历数组，当满足item.id === student.id时，返回满足条件的数组项
        var stu = students.find(function(item){
            return item.id === student.id
        })
        // 使用for in遍历对象，将传递进来的对象覆盖掉原本的内容
        for(var key in student){
            stu[key] = student[key]
        }
        //  将对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath,fileData,function(err){
           if(err){
               return callback(err)
           }
           // 成功就没错，传入的err为null
           callback(null)
        })
    })
}

//  删除学生

exports.delete =  function(id,callback){
    fs.readFile(dbPath,'utf-8', function(err, data){
        if(err){
            return callback(err)
        }
        // 删除学生时根据输入的Id值进行删除，此处存储的数据在.json文件中，所有的数据在students数组中，其id在此是唯一的连续的，所有删除的id为几，则其就在students的第n-1项
        var students = JSON.parse(data).students
        students.splice(id - 1, 1)
        console.log(students)
        // 将删除之后的对象转换为字符串再存储在json文件中
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, 'utf-8', function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}