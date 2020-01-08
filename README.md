## 四条主线
>封住node,http,server
>构造request,response,contex对象
>中间件机制
>错误处理

### 主线一：封装node http Server: 从hello world说起
原生实现http模块实现一个服务
```
let http = require('http');

let server=http.createServer((req,res)=>{
    res.writeHead(200);
    res.end('Hello,world')
});

server.listen(3000,()=>{
    console.log('listenning on 3000');
})
```
---
创建application.js实现一个Application对象
```
l/*
 * @Description: 实现一个简单的koa
 * @Author: dingxuejin
 * @Date: 2020-01-08 22:20:29
 * @LastEditTime : 2020-01-08 22:39:30
 * @LastEditors  : dingxuejin
 */

let http = require('http');

class Application{
    /**
     * @description: 构造函数
     * @param : null
     * @return: null
     */
    constructor(){
        this.callbackFunc;
    }
    /**
     * @description: 实现listen函数
     * @param :.args
     * @return: null
     */
    listen(...args){
        let server=http.createServer(this.callback());
        server.listen(...args)
    }
    /**
     * @description: 挂载回调函数
     * @param : {Function} fn 回调处理函数
     * @return: null
     */
    use(fn){
        this.callbackFunc=fn;
    }
    /**
     * @description: 获取http server所需的callback函数
     * @param : null
     * @return: {Function} fn
     */
    callback(){
        return (req,res)=>{
            this.callbackFunc(req,res);
        }
    }
}

module.exports = Application;
```
---
创建example.js
```
let dingKoa=require('./application');
let app =new dingKoa();

app.use((req,res)=>{
    res.writeHead(200);
    res.end('Hello,world')
})

app.listen(3000,()=>{
    console.log('listening on 3000');
})
```
### 主线二：构造request, response, context对象
