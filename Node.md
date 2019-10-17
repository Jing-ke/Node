# Node.js

## Node.js介绍

### 为什么学习Node.js
- 企业需求
    + 具有服务端开发经验更好
    + front-end
    + back-end
    + 全栈工程师
    + 基本的网站开发能录
        * 服务端
        * 前端
        * 运维部署
    + 多人社区

### Node.js是什么
- Node.js不是一门语言，不是库不是框架
- 构建于Chorme V8引擎之上
    + 代码只是字符串 而浏览器引擎可以去解析它
    + Google Chorme 的V8引擎是公认解析js最快的引擎
- Node.js时一个Javascript运行时环境，可以解析和执行Javascript代码，以前只有浏览器可以解析javascript代码
- 也就是说现在的javascript可以摆脱浏览器运行，一切归功于：Node.js
- 浏览器中的Javascript
    + EcmaScript
    + 基本语法
    + BOM
    + DOM
- Node.js中的javascript 
    + 没有BOM、DOM
    + Ecmascript
    + 在Node这个javascript执行环境中为javascript提供了一些服务器级别的操作API
        + 文档读写
        + 网络服务搭建
        + 网络通信
        + hhtp服务器
        + 等等...
- Node.js的特性
    - event-driven  事件驱动
    - non-blocking I/O model 非阻塞I/O模型（异步）
    - 轻量高效
- npm时世界上最大的开源库生态系统
    + 绝大多数Javascript相关的包都存放在npm上，这样做的目的是为了让开发人员更加方便的去下载使用。
    + `npm install 包名`
### Node.js能做什么
- Web 服务器后台
- 命令行工具
    + npm（node）
    + git（c语言）
    + hexo（node）
    + ...
- 对于前端开发中接触最多的还是node的命令行工具
    + 自己写的很少，主要使用别人第三方的
    + webpack
    + gulp
    + npm

### 预备知识
- HTML
- CSS
- Javascript
- 简单的命令行操作
    + cd
    + dir (列出文件目录)
    + ls (列出文件目录)
    + mkdir (创建文件)
    + rm (移除文件)
- 具有服务端开发经验

### 一些资源
- 《深入浅出的Node.js》 （偏向原理）
- 《Node.js权威指南》
- JavaScript标准参考教程（alpha）： http://javascript.ruanyifeng.com
- Node入门：http://www.nodebeginner.org/index-zh-cn.html
- 官方API文档： https://nodejs.org/dist/latest-v6.x/docs/api/
- 中文文档（版本比较旧）：http://www.nodeclass.com/api/node.html
- CNODE社区：http://cnodejs.org
- CNODE-新手入门：http://cnodejs.org/getstart

### 这门课程能学到什么
- B/S 编程模型 
    + Browser-Server
    + back-end
    + 任何服务端编程的B/S模型都是一样
- 模块化编程
    + RequireJS
    + SeaJS
    + `@import('文件路径')`
    + 以前任职的JavaScript只能通过script标签引入
    + 在Node中可以像`@import('文件名')`一样引用加载JavaScript脚本文件
-  Node常用API
- 异步编程
    + 回调函数
    + Promise
    + async
    + generator
- Express开发框架
- Ecamscript 6
    + 只有一些新语法
- ...
- 学习Node不仅帮助学习一定的服务端值知识还对后期的前端框架学习有很大帮助
    + React
    + Vue
    + angular

## 起步

### 安装Node环境
- 查看当前Node环境版本号`node --version`
- 下载： https://nodejs.org/en/download/
- 安装: 傻瓜式下一步即可（安装新版本的node会将老版本的覆盖掉）
- 确认Node环境是否安装成功
    + 打开命令行，输入`node --version`或者`node -v`
- 环境变量

### REPL
- read 输入
- eval 执行
- print 输出
- loop 循环
- 在控制台中直接`node`回车即可测试API
    + 核心模块直接使用，不用引包
    + Ctrl + c + c 退出

### Hello World
1. 创建编写JavaScript脚本文件（**不要讲文件名命名为Node.js**）
1. 打开终端，定位到脚本文件所属目录
    - 按住Shift加右键选择在可以在cmd中打开直接在当前文件夹
1. 输入 `node  文件名` 执行对应文件（文件名可以使用tab进行补全）
- 解析执行JavaScript脚本
-  读写文件 （fs文件操作模块，其提供了所有的文件操作方法）    <font color="red">文件操作的所有API都是异步操作</font>
    ```javascript
        // 使用require方法加载fs核心模块
            var fs = require('fs')
        //读取文件
            /*第一个参数是要读取的文件的路径
            第二个参数时一个回调函数
                成功
                    data 就是读取的数据
                    error就是null
                失败
                    data就是undefined
                    error就是错误对象*/
            fs.readFile('读取文件的路径',function(error,data){
            /*文件中存储的其实都是二进制数据，这里看到的都不是01，因为被转换为16进制了,可以通过toString方法转化为字符串*/
            if(error){
                console.log("文件读取失败")
                return
            }
            data.toString()
            })
        //文件写操作
            /*
            成功: 
                error为null
            失败：
                error就是错误对象
            */
            fs.writeFile('写的文件路径'，'写入文件的内容',function(error){
                if(error){
                    console.log("文件写入失败")
                    return
                }
                console.log("文件写入成功")
            })
    ``` 
- http(使用node构建一个简单的服务器)
    + <font color="red">在服务端发送响应时，响应的内容只能是二进制或者字符串</font>
    + <font color="red">数字、对象、数组、布尔值都不能成为响应的内容</font>
    + <font color="blue">当数字、对象、数组、布尔值为响应数据时要经过`JSON.stringify(obj)`或者`obj.toJSONString()`进行序列化，将对象转化字符串</font>
    ```javascript
        //1.加载 http 核心模块
        var http = require('http')
        //2.使用http.createServer()方法创建一个 Web 服务器  返回一个Server实例
        var server = http.createServer()
        /*3.服务器要干什么？
            提供服务： 对数据的服务
            发请求、接受请求、处理请求、给予反馈（发响应）
            注册request  请求事件
            当客户端请求发送过来，就会触发服务端的request请求事件，然后执行第二个参数中：回调处理函数
        */
        //Request请求时间处理函数，需要接受两个参数
        // Request 请求对象
        //  请求对象可以用来获取客户端的一些请求信息
        // Response 相应对象
        //  响应对象可以用来给客户端发送响应消息
        server.on('request',function(request,response){
            console.log("收到客户端请求")
            //response 对象有一个方法：write方法可以给客户端发送响应数据，write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
            response.write("hello")
            response.write("nodeJS")
            response.end()
        })
        //绑定端口号，启动服务器
        server.listen(3000,function(){
            console.log("服务器启动")
        })
        
    ```
- 结合url对请求路径进行指定的响应内容
    ```javascript
        var http = require('http')
        var server = http.createServer()
        server.on('request',function(req,res){
            console.log("收到请求了"+ req.url)
            //一般都用res.end("响应的内容")，而不是用多个write再用end
            //1.获取请求路径
            //     req.url获取到的是端口号之后的那部分内容
            var url = req.url
            //2.判断路径处理响应
            if( url === '/'){
                res.end("index page")
            }else if( url === '/login'){
                res.end("login page")
            }else{
                res.end("404 notfind")
            }

        })
        server.on(3000,function(){
            console.log('服务器开启')
        })
    ```

## Node中的JavaScript
- EcmaScript
    + 没有DOM、BOM
- 核心模块
- 用户自定义模块
- 第三方模块

### 核心模块
    Node为JavaScript提供了很多服务器级别的API，这些API绝大部分被包装到了一个具名的核心模块中，列入文件操作的`fs`核心模块，http服务构建的`http`模块，`path`路径操作模块，`os`操作系统信息模块

以后只要说这个模块是一个核心模块，就必须：
```javascript
    var http = require('http')
    var fs = require('fs')
    ...
```

### 用户自定义模块
- require
    1. **加载文件模块并且执行里面的代码**
    1. **拿到被加载文件模块中导出的接口对象**
    + <font color="red">在Node中，没有全局作用域，只有模块作用域，外部访问不到内部，内部也访问不到外部</font>
    + require是一个用来加载模块的方法
    + 用户自定义模块相对路径必须加 ./
    + 可以将后缀名省略
- exports
    + exports是用来将需要被外部访问的内容进行导出的方法
    + 默认是一个空对象

### 第三方模块





## Web服务器开发

### ip地址和端口号
- ip地址用来定位到计算机
- 端口号用来定位到具体的应用程序
- 一切需要联网通信的饿软件都会占用一个端口号
- 端口号的范围从 0 - 65536 之间
- 计算机中有一些默认的端口号，最好不去使用
    + 例如 http服务的 80
- 开发中使用一些好记的即可，例如 3000、5000等等
- 可以同时开启多个服务但是端口号不能重复

### 响应内容类型 Content-Type
    在服务器端默认发哦送的数据是utf-8编码的内容，但是浏览器不知道你是utf-8编码，浏览器在不知道响应内容的编码情况时会按照操作系统默认的编码去解析，中文操作系统是gbk
    解决方法：
        1.告知浏览器发送的响应内容是以utf-8的形式进行的编码。**只有字符才去指定编码类型，图片的不需要**
        2.除去通过Content-Type来设置响应头也可以在HTML文件中的mate元数据中声明当前文档的编码形式
        
- 不同数据类型对应的Content-Type类型 ：http://tool.oschina.net/commons
```JavaScript
    //在http协议中，Content-Type就是用来告知浏览器响应内容的编码形式
    var http = require('http')
    var server = http.createServer()
    server.on('request',function(req,sres){
        res.setHeader('Content-Type','text/plain;charset = utf-8')
    })
```
### 请求对象 Request

**<font color="red">在所有的请求以及响应中，都是以此请求对应以此响应，在响应过程中已经出现`response.end()`后，其后面在发送响应都没有用。</font>**



### 响应对象 Response

**<font color="red">在所有的请求以及响应中，都是以此请求对应以此响应，在响应过程中已经出现`response.end()`后，其后面在发送响应都没有用。</font>**












### 在 Node 中使用模板引擎
- art-template模板
    + npm install art-template --save
    + **<font color="red">模板引擎不关心你的字符串内容，只关心自己认识的模板标记语法</font>**。例如{{}}，其被称为Mustache语法。
        + Node中使用art-template模板引擎（先从后端出现，后发展到前端）
            1. 安装 npm install art-template --save
            1. 在需要使用的文件模块中使用`require('art-template')`加载
            1. 查看文档，使用模板引擎的API
            `template.render('需要替换的内容',替换内容)`
            ```JavaScript
                fs.readFile('./tp1.html',function(err,data){
                    if(err){
                       return console.log('文件读取失败')
                    }
                    var ret = template.render(data.toString,{
                        name: 'Jack',
                        age: 18,
                        hobbies:[
                            '唱',
                            '跳',
                            'Rap'
                        ]
                    })
                })
                res.end(ret)
            ```
        + 浏览器使用时需要利用`<script src='node-modules/art-template/llib/template-web.js'></script>`进行引入 
            1. 下载js文件到本地
            1. `<script src='node-modules/art-template/llib/template-web.js'></script>`标签引入文件
            1. 具体操作如下
            ```javascript
                <script src='node-modules/art-template/llib/template-web.js'></script>

                <script type="text/template" id="tp1">
                    我是{{name}}
                    我喜欢：{{each hobbies}} {{$value}} {{/each}}
                </script>

                <script type="text/template" id="tp1">
                    var ret = template('tp1',{
                        name: '蔡徐坤',
                        hobbies: [
                            '唱',
                            '跳',
                            'RAP'
                        ]
                    })
                </script>
            ```



### 客户端渲染和服务端渲染
- 两者的区别
    + 客户端渲染
        <img src="./img/客户端渲染.jpg">
    + 服务端渲染
        <img src="./img/服务端渲染.jpg">
- 如何选择渲染方式
    + 客户端渲染不利于SEO搜索引擎优化
    + 服务端渲染可以被爬虫抓取到，而客户端异步渲染很难被爬虫抓取
    + **在具体开发中例如商品类希望被抓取到的使用服务端渲染，而评论为了用户体验，不被抓取到也无所谓，采用客户端渲染**


### 处理网站中的静态资源
**在node中所有的资源都是不允许被用户访问的，若想被用户访问必须通过代码开放资源，PHP中无论是代码还是网页都可以通过web  url路径来访问。**

浏览器接收到HTML响应文件之后，就会开始依次从上向下解析，解析过程中，如果发现 `link` ，`script` ，`img`，`iframe` ，`video` ，`audio`等具有 src 或者 link 的 href 属性的时候，浏览器会自动对这些资源发起新的请求。

为了统一处理这些静态资源，我们约定将所有这些 静态资源统一存放在public目录中，
- 注意： 在服务端中，文件的路径就不要写相对路径了。因为这个时候所有的资源都是通过url表示来获取的，服务器开启了/public/目录所有这里的请路径就应该写成：/public/xxx,  此处的/就是url根路径的意思。
- 在静态页面的HTML中，超链接中的href中的链接地址也是用文件路径来写。

```javascript
    if(url === '/'){
        fs.readFile('./view/index.html',function(err,data){
            if(err){
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    }else if(url.indexOf('/public' === 0)){
        // 如果请求路径是以/public/开头的，则我认为你要获取的是public中的某个静态资源，所以直接将请求路径当做文件路径直接进行读取。
        fs.readFile('.' + url,function(err,data){
            if(err){
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    }

```
    
### node中服务端重定向
1. 状态码设置为302 临时重定向，浏览器不会记住    （301为永久重定向，浏览器会记住）
    `response.statusCode = 302`
1. 在响应头中通过Location告诉客户端重定向的地址
    `response.setHeader('Location',"重定向地址")`
    
**重定向设置之后也要结束响应`response.end()`**

浏览器在发现服务端的响应状态码为302时会自动去响应头中找`Location`，然后根据`Location`地址发起新的请求。

     




## Node中的模块系统
使用 Node 编写应用程序主要就是在使用：
- EcmasCript语言
    + 和浏览器不一样，在Node中没有BOM、DOM
- 核心模块 
    + 文件操作的fs
    + http服务的http
    + url路径操作模块
    + path路径处理模块
    + os操作系统信息
- 第三方模块
    + art-template
- 自定义模块

### 什么是模块化
- 文件作用域
- 通信规则
    + 加载require
    + 导出exports

### CommonJs 模块规范
在 Node 中的 JavaScript还有一个很重要的概念： 模块系统。
- 模块作用域
- 使用 require 方法来加载模块
- 使用 exports 接口对象来导出模块

在模块的导出中使用的是`module.exports`，其是一个对象（引用型数据类型），node为了方便使`exports = module.exports `，由于直接给 exports 赋值相当于开辟新的空间，而不再是引用 `module.exports`的地址，而结果最终 `return`的是`module.exports`,所以直接给 `exports` 赋值不能被导出。

如果一个模块是需要直接导出某个成员，而非挂载在 exports 上，则使用：`module.exports = 'hello' `

#### 导出 `exports`
Node中是模块作用域，默认文件中所有成员只在当前模块有效，对希望可以被其他模块访问的成员，我们需要把这些公开的成员挂载到`exports`接口对象中。
- 导出多个成员（必须在对象中）
```javascript
exports.a = 123
exports.c = function(){

}
exports.d = {
    foo : 'bar'
}
```

- 导出单个成员(拿到的是：函数、字符串)   如果多次赋值，后面的会覆盖前面的
```javascript
module.exports = 'hello'
// 也可以利用对象导出多个成员
module.exports = {
    a : 123,
    add : function(){}
}
```

#### 加载 `require`
语法：
```javascript
var 自定义变量名称 = require('模块')
```
两个作用:
1. 执行被加载模块的代码
1. 得到被加载模块中的 `exports`对象

#### 原理
Node中，每个模块中都会有一个自己的 `module`对象，该对象中又有一个空的 `exports`对象，在代码后有一句 `return module.exports`，原本导出的是 `module.exports.XXX = XXX`，Node为简化操作将`module.exports`赋值给 `exports`。

`exports` 是 `module.exports` 的一个引用
```javascript
console.log(exports === module.exports)   //true

exports.foo = 'bar'
//等价于
module.exports.foo = 'bar'
```

关于赋值问题
```javascript
exports.foo = 'bar'
module.exports.a = 123
exports = {
    a: 456
}
exports = module.exports
exports.a = 789
module.exports = function(){
    console.log('hello')
}
//结果为最后的函数
```

#### require加载规则
- 核心规则
    + 模块名
- 第三方模块
    + 模块名
- 自定义模块
    + 路径

1. 优先从缓存加载
    - main中要接在a和b，a中加载b，则main加载a时，a会将b加载了，因此main无需再加载b，但是a能得到b中的导出内容，但是不会再次执行b中的代码
1. 判断模块标识 `require('标识')`
    - 标识符为路径
    - 标识为核心模块（本质也是文件）
    - 标识为第三方模块
        1. 先找当前文件所在目录中的`node-modules`目录
        1. 然后找 `node-modules`下的第三方模块的名称文件夹
        1. `node-modules/art-template/package.json`
        1. `node-modules/art-template/package.json`中的main属性
        1. main
        属性中记录了`art-template`的入口模块
        1. 然后加载使用这个第三方模块 （当`package.json`或者`main`中入口模块有误时，会默认找`index.js`）
        1. 当以上任一条件不成立，则会进入上级中的`node-modules`文件，然后重复上面的操作
        1. 依次同7找上级，没有则报错（到磁盘根目录为止）
        
    <font color="color">**一个项目中只有一个Node-modules，放在项目根目录下**</font>

### npm (node package manager)
- 版本 ： `npm --version` / `npm -v`
- 升级 ：`npm install --global npm` 
- 常用命令 ：
```powershell
npm init -y   #可以跳过向导，快速生成package.json
npm install / npm i  #将package.json中的依赖安装回来
npm install 包名   #仅仅下载
npm install --save 包名  #下载包且保存依赖项
npm uninstall 包名  / npm un 包名 #仅删除包，不删除依赖项
npm unstall --save 包名 /npm un -S 包名 #删除包，删除依赖项
npm help    #查看使用帮助
npm 命令 --help  #查看指定命令的使用帮助
```



### package.json
我们建议每一个项目都有一个`package.json`文件（包描述文件）

在安装时后面加 `--save`或 `-S`（加在包名的前面或后面都可以），其会在`package.json`中将依赖项添加进去，<font color="red">当项目中的`node-modules`不在时，直接`npm i`就会根据`package.json`中的`dependencies`中的依赖项下载回来</font>，`package.json`可以通过`npm init`生成（是以向导的方式创建，如下）
```javascript
Windows PowerShell
版权所有 (C) 2009 Microsoft Corporation。保留所有权利。

PS E:\一入前端深似海\node> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (node) demo-one
version: (1.0.0) 0.0.1
description: "这是一个描述"
entry point: (index.js)
test command:
git repository:
keywords:
author: By-Jing
license: (ISC)
About to write to E:\一入前端深似海\node\package.json:

{
  "name": "demo-one",
  "version": "0.0.1",
  "description": "\"这是一个描述\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "By-Jing",
  "license": "ISC"
}


Is this OK? (yes)
```

### 解决npm被墙的问题
使用淘宝镜像 `cnpm`

- 如果不想安装 `cnpm`，但是又想使用淘宝的服务器下载包，则安装时使用下面的操作（但是每次安装包时都要在后面加一堆东西）
```powershell
npm install jquery --registry=https://registry.npm.taobao.org
```
- 将下面的选项加入配置文件中，就不用每次安装时加一堆东西（配置后，安装就不用加后面的一堆东西，且所有的安装都会从淘宝服务器下载）
```powershell
npm config set registry https://registry.npm.taobao.org
```
查看npm配置信息： `npm config list`


## Express
原生的http在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码更高度统一。

- http://expressjs.com/

### Express使用

原生的 http 在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码高度统一。

在 Node 中，有很多 Web 开发框架。
#### 起步
1. 安装
    ```powershell
        npm install express --save
    ```
1. 引包使用
    ```javascript
        var express = require('express')
        //相当于原本的 http.createServer
        var app = express()
        //当服务器收到get请求 / 时，执行回调函数
        //使用express后相应的内容为中文时不用处理编码，express自动处理了
        app.get('/',function(req,res){
            res.send('Hello')
        })
        //使用express后一个请求对应一个响应
        app.get('/about',function(req,res){
            //在Express中可以直接 req.query来获取查询字符串参数（表单提交的内容）
            res.send('这是Express')
        })
        //相当于 server.listen
        app.listen(3000,function(){
            console.log('服务器已经开启')
        })
    ```

#### 基本路由
路由就是一张表，内部存储着具体的映射关系。
* 请求方法
* 请求路径
* 请求处理函数

get：
```javascript
//当你以 GET 方法请求 / 的时候，执行后面的回调函数
app.get('/',function(req, res){
    res.send("Hellow World!")
})
```

get：
```javascript
//当你以 POST 方法请求 / 的时候，执行后面的回调函数
app.post('/',function(req, res){
    res.send("Get a post request")
})
```


#### Express处理公共资源
 ```javascript
        var express = require('express')
        //相当于原本的 http.createServer
        var app = express()
        //公开静态资源，用户可以通过路径访问public中的内容（127.0.0.1:3000/public/login.html），推荐这种
        app.use('/public/',express.static('./public/'))
        // 当没有第一个参数时，访问时就不需要加上 /public去请求，直接请求public中的内容（127.0.0.1:3000/login.html）
        // app.use(express.static('./public/'))
        // 下面的表示请求的是必须是 （127.0.0.1/a/login.html）,相当于请求路径中将 /public替换成 /a
        // app.use('/a/',express.static('./public/'))
        //相当于 server.listen
        app.listen(3000,function(){
            console.log('服务器已经开启')
        })
    ```



### Express中使用模板字符串 `art-template`
- 官方文档查找在`Express`中使用`Art-template`模板引擎
[art -template-GitHub仓库](https://github.com/aui/art-template)
[art-templat 官方文档](https://aui.github.io/art-templat/)
1. 安装
```shell
npm install --save art-template
npm install --save express-art-template
```
1. 配置
```javascript
var express = require('express')
var app = express()
app.use('/public/', express.static('./public'))

// 配置使用 art-template 模板引擎
// 第一个参数，表示当以渲染 .art 结尾的文件的时候，使用 art-template模板引擎
// express-art-template 是专门来在 Express 中把 art-template整合到 Express中
// 虽然这里不需要加载 art-template，但是也必须安装

// 第一个参数为 art 时，在views中的视图文件的后缀就需要改成 .art结尾，
app.engine('art', require('express-art-template'))

// 这里可以将 第一个参数改为 html，这样视图文件就不需要改名称
app.engine('html', require('express-art-template'))

// Express 为 Response响应对象提供了一个方法： render
// render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用

// 第一个参数不能写路径，默认回去项目中的 views目录中查找该模板（开发时将所有的视图文件放置到 views目录中）
res.render('html模板名',{模板数据})
```
1. 使用
```javascript
var express = require('express')
var app = express()
app.use('/public/', express.static('./public'))

// 配置使用 art-template 模板引擎
app.engine('html', require('express-art-template'))

app.get('/',function(req, res){
    res.render('index.html',{
        title: "Hellow Word"
    })
})
```
如果想要修改默认的查找路径（即将views的路径修改为其他自定义路径）
```javascript 
// 注意：第一个参数 views 是不可改变的
app.set('views',目录路径)
```

<font color="red">Express中的重定向 `res.redirect('/')`</font>



### Express中配置表单解析GET请求
Express内置了一个API，可以通过 `req.query`来获取
```javascript
app.get('/post'，function(req, res){
    var comment = req.query 
})
```

### Express中配置表单解析POST请求
当以 POST 请求 /post 路径的时候，执行指定的处理函数

在Express中没有内置获取表单 POST 请求体的 API,这里使用第三方包：`body-parser`.

安装
```shell
npm install body-parser
```
配置
```javascript
var express = require('express')
// 引包
var vodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要假如这个配置，则在 req 请求对象上会多出来一个属性： body
// 即可以直接通过 req.body来获取表单 POST 请求体数据
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

```
使用
```javascript
// 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次(之前利用 get的时候点击提交时需要去请求 /评论，然后执行回调，现在不用去请求新的url，直接请求当前post页面即可)
app.post('/post'，function(req, res){
    // 配置完 body-parser就可以使用 req.body获取 POST 请求体数据
    var comment = req.body 
})
```



##  CRUD （以学生系统的增删改查）
### CRUD-模拟数据持久化（将数据存储在`.json`文件中）
1. 文件读取
    + db.json文件
    ```javascript   
        {
            "students":[
                {"id": 1, "name": "张三", "gender": 0, "age": 18, "hobbies": "唱,跳"},
                {"id": 1, "name": "张三", "gender": 0, "age": 18, "hobbies": "唱,跳"},
                {"id": 1, "name": "张三", "gender": 0, "age": 18, "hobbies": "唱,跳"},
                {"id": 1, "name": "张三", "gender": 0, "age": 18, "hobbies": "唱,跳"},
                {"id": 1, "name": "张三", "gender": 0, "age": 18, "hobbies": "唱,跳"}
            ]
        }

    ```
    + js文件
    ```javascript   
    var fs = require('fs')
    app.get('/',function(req, res){
        // 在 readFile方法中的第二个参数 utf-8 表示将读取的文件按照 utf-8进行编码（除此之外也可是使用 data.toString()方法进行转换）
        // 根据存放的json文件进行读取
        fs.readFile('./public/json/db.json', 'utf-8', function(err, data){
            if(err){
                // 在读取文件错误时候要先将状态码修改为500
                return res.status(500).send("Server error")
            }
            //文件中读取的数据是字符串要将读取的字符串转换为 json 数据
            var students = JSON.parse(data).students
            // 根据文件的读取进行响应
            res.render('index.html',{
                students: students
            })
        })
    })
    ```
    + html文件
    ```html
    {{ each students }}
        <tr>
            <td bgcolor="#FFFFFF">
                <div align="center"><img src="../public/img/tx.jpg"></div>
            </td>
            <td class="datacol" bgcolor="#FFFFFF">{{ $value.id }}</td>
            <td bgcolor="#FFFFFF">{{ $value.name }}</td>
            <td bgcolor="#FFFFFF">{{ $value.gender }}</td>
            <td class="yccol" bgcolor="#FFFFFF">{{$value.age}}</td>
            <td class="czcol" bgcolor="#FFFFFF"><a
                href="#">{{ $value.hobbies }}</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">{{ $value.hobbies }}</a></td>
        </tr>
    {{ /each }}
    ```

### CRUD-路由设计
| 请求方法 | 请求路径      |GET参数  | POST参数                 | 备注                       |
|---------|--------------|---------|--------------------------|----------------            |
| GET     | /students    |         |                          | 渲染学生也                   |
| GET     | /students/new|         |                          | 渲染添加学生页面            |
| POST    | /students    |         |name、age、gender、hobbies | 处理表单提交添加学生请求            |
| GET     | /studetes/edit      |id         |         | 渲染编辑学生页面 |
| POST     | /students/edit       |         |id、name、age、gender、hobbies         | 处理编辑请求 |
| GET     | /students/delete       |id         |         | 处理删除请求 |


### 路由模块的提取

#### 自己进行封装路由模块的提取
由于原本在`app.js`文件中放置着所有的路由配置，当页面多的时候整个文件内容就会增加，因此在这里我们将`app.js`文件中的路由模块提取出来放置到一个新的js文件`router.js`文件中，由于我们只希望将`app.js`作为整个网站的入口文件，所以使用下面的方式（这种方式的需要自己进行封装）

app.js
   ```javascript
    var express = require('express')
    // 引入router.js中的内容
    var router = require('./router')

    var app = express()
    app.use('./public/',express.static('./punlic'))
     
    app.engine('html', require('express-art-template'))
    
    // 执行引入的router文件中的router方法，由于路由中需要用到app，所以将app.js中的app作为参数传递给router.js   (原本这里写的就是路由的模块)
    router(app)

    app.listen(3000,funtion(){
        console.log('Server on')
    })
   ```
router.js
   ```javascript
    // 下面涉及到文件的操作，因此这里导入fs核心模块
    var fs = require('fs')
    module.exports = function(app){
        // 根据上面的路由设计GET请求/students时渲染页面
        app.get('/students',function(req, res){
            // 读取json文件中的学生信息
            fs.readFile('./public/json/db.json', 'utf-8', function(err, data){
                if(err){
                    return res.status(500).send('Server error')
                }
                var  students = JSON.parse(data).students

                // 响应数据
                res.render('index.html',{
                    students: students
                })
            })
        })

        // get请求 /students/new，渲染添加学生页面
        app.get('/students/new',function(req, res){
            res.render()
        })
        // post请求 /students, 处理表单提交添加学生请求     (参数： 所有表单提交的信息)
        app.post('/students',function(req, res){
            
        })
        // get请求 /students/edit,渲染编辑学生页面      (参数:  id)
        app.get('/students/edit',function(req, res){
            
        })
        // post请求 /students/edit,处理编辑请求     (参数： id加所有表单提交的信息)
        app.post('/students/edit',function(req, res){
            
        })
        // get请求 /students/delete,处理删除请求    (参数：id)
        app.get('/students/delete',function(req, res){
            
        })

    }
   ```
#### Express中提供了专门进行路由模块提取的方法

<font color="red">在配置`模板引擎`以及`body-parser`时，一定要将其配置在挂载路由之前，即在`app.js`的`app.use(router)`挂在路由之前进行配置</font>

app.js
   ```javascript
     var express = require('express')
    // 引入router.js中的内容
    var router = require('./router')
    var app = express()
    app.use('./public/',express.static('./punlic'))
    app.engine('html', require('express-art-template'))
    // 在router.js中的路由模块挂载到router路由容器中导出后，在app.js中将路由容器挂载到app服务中
    app.use(router)

    app.listen(3000,funtion(){
        console.log('Server on')
    })
   ```
router.js
   ```javascript
    var fs = require('fs')
    var express = require('express')
    // 1.创建一个路由容器
    var router = express.Router()
    // 2.将路由都挂载到router路由容器中
    router.get('/students',function(req, res){
        fs.readFile('./public/json/db.json', 'utf-8', function(err, data){
            if(err){
                return res.status(500).send('Server error')
            }
            var  students = JSON.parse(data).students
            res.render('index.html',{
                students: students
            })
        })
    })

    router.get('/students/new',function(req, res){
        res.render()
    })
    router.post('/students',function(req, res){
        
    })
    router.get('/students/edit',function(req, res){
        
    })
    router.post('/students/edit',function(req, res){
        
    })
    router.get('/students/delete',function(req, res){
        
    })
    // 3.将 router 导出
    module.export = router
    }
   ```

   























## MongoDB



## 其他


### 模块标识中的 `/` 和文件操作路径中的 `/`
1. 文件操作
```javascript
    var fs = require('fs');
    //文件操作中的相对路径可以省略  ./
    // 此处的js文件与data文件夹处于同一级目录
    fs.readFile('date/a.txt')

    //文件操作的相对路径中
    //  ./data/a.txt  相当于当前目录
    //  data/a.txt    相当于当前目录中
    //  /data/a.txt   绝对路径，当前文件模块所处磁盘更目录
```
2. 模块标识  (即`require`中的内容)
```javascript
    //模块标识中的相对路径不可以省略  ./
    // 此处的js文件与data文件夹处于同一级目录
    var foo= require('./data/foo.js');  //.js可以省略

    //  ./data/a.txt  相当于当前目录
    //  /data/a.txt   绝对路径，当前文件模块所处磁盘更目录
```


### 修改完代码自动重启服务

使用第三方命令行工具： `nodemon` 来解决频繁修改代码重启服务器问题。

`nodemon`是一个基于Node.js开发的一个第三方命令行工具，使用时需要独立安装

```powershell
    npm install --global nodemon
```
安装完毕后，使用:
```powershell
    #原本使用
    node app.js
    #现在使用nodemon
    nodemon app.js
```
只要使用的`nodemon`启动的服务器，则后面代码经过修改就不需要每次重新启动，该工具会自动监测重启。

### `app.js`模块和`router.js`模块
模块职责要清晰单一，不要混用。

1. `app.js`（入口模块）
+   职责
    +   创建服务
    +   做一些服务相关配置
        +   模板引擎
        +   `body-parser`解析表单`post`请求体
        +   提供静态资源服务
    + 挂载路由
    + 监听端口启动服务
2. `router.js`（路由模块）
+   职责：
    +   处理路由
    +   根据不同的请求方法+请求路径设置具体的请求处理函数


### 封装异步API
如果需要得到一个方法中的异步操作结果，则必须使用回调函数
<img src="./img/获取异步操作结果.png">

```javascript
// 怎样调用函数 fn 获取到内部的 date 的数据
function fn(callback){
    setTimeout(function(){
        var date = '1000'
        callback(data)
        // (这里的callback（data），就是function（data）{console.log（data）}，此处的data就是异步中的data)
    },1000)
}

fn(function(data){
    console.log(data)
})

// 将外部执行的函数fn传递一个函数，该函数作为函数fn的执行参数，该参数保留到fn函数内部的异步操作中执行，将内部需要获取的数据当做callback的参数进行执行。
```

