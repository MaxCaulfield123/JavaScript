// 异步模块定义AMD的目标以浏览器为执行环境,需要考虑网络延迟
//AMD用函数包裹模块体->来防止全局变量,函数是全局define的参数

// AMD这里指定了自己的标识符?
define('moduleA',[//定义一个moduleA模块,A依赖require与moduleB模块,A的内容在函数内
  'require',
  'moduleB'//这里的依赖都是异步加载的
], function (require,moduleB, factory) {//所有依赖加载完后会立马执行函数体
  'use strict';
  require('moduleC')//也可以在这里使用require引入其他模块
  // exports.a=moduleB.b 也可以使用exports对象
  return{
    a:moduleB
  }
});

// 还有一个UMD universal module definition 用于创建两个系统都能用的模块代码
// 其实就是能力检测
if(typeof define==='function'&&define.amd){
  //判断出这里是浏览器AMD
}else if(typeof module==='object'&&module.exports){
  // 这里是Node
}

// 这几节的模式终将没落,但我们可以了解为什么ES6比这个更好