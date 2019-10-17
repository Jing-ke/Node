var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')
var app= express()


// 配置使用art-template模板引擎
app.engine('html',require('express-art-template'))

// 配置body-parser  post请求（模板以及bodyparser必须配置到路由之前）
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)

app.listen(3000,function(){
    console.log('服务已经开启')
})