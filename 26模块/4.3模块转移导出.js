// 模块可以引入的同时导出;
// foo.js
export const baz='origin:foo'
// bar.js
export * from './foo.js'//这句话将导入的模块直接导出了
export const baz='origin:bar'
// main.js
import {baz} from './bar.js';

// 工作者模块,worker实例化时第二个参数可以说明传入的是模块文件
let worker=new Worker('moduleWorker.js',{type:'module'})

