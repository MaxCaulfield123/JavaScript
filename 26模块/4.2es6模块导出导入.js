// 导出必须在模块内顶级,不能在代码块中
let a='a'
// 命名行内导出,可以将声明与export放一起
export const max='123';
export class Chloe{};
// 子句导出
export {a as b,c,d};//在引入的js文件中以b访问,只有在子句中能用别名
// 默认导出只能导出一次
export default 'foo'


// 导入import也必须放在最外面而不是代码块中
// import 变量 from 标识符(绝对或相对路径);
// 浏览器中加载模块最好带有js后缀或是由第三方工具打包的模块,否则可能会解析错误

// 不能直接修改导出的值
import foo,* as Foo from './3.js';
foo='foo'//错误
Foo.a='a'//错误

// 不同的导出方式对应不同的导入,export {}中的变量集合在import 中可以用*来代表
import * as max from '/3.js'//export {a,b,c}
max.a;

//也可以对多个export 的模块用指名导入
import{vue,react} from './3.js';

// 默认导出时导入方式
import chloe from './3.js'//export default '123'
import {default as chloe} from './3.js'//export default '123'

// 模块同时有命名导出和默认导出时
import foo,{bar,baz} from './foo.js'//foo代表默认导出default的模块 {bar,baz}为export

