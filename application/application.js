/*
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