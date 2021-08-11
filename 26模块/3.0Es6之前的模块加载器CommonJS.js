/**在ES6原生支持模块之前,使用模块的js其实是用某种规范(有不同规范)的模块语法,
 * 再用单独的模块工具把这些语法与JavaScript运行时联系起来,
 * 通常需要在浏览器中额外加载库或构建时完成预处理
**/
// commonJS概述了同步声明依赖的模块定义,主要用于服务器端,也可以定义前端模块,它的语法不能在浏览器直接运行
// NodeJS使用了commonJS的轻微修改版本

// !同步!的引入模块,使用require指定依赖,指定模块标识符,nodejs中标识符指向文件名或node_modules中有index.js的目录
require('./xx.js')
let a=require('./xx.js')//也可以引入后赋值给变量,和上方无论引用多少次相同模块,模块都只会被加载一次

// 使用module.exports对象定义自己的公共api,如果没有定义,则引用时直接执行模块体
module.exports = class Max { }//可以是任何东西
module.exports.a='b'
module.exports.b='a'//与下方一样
module.exports={a:'b',b:'a'}

// 如果想在浏览器上运行commonJS规范,则要注意可能模块体会创建全局变量,应该用闭包保护模块体