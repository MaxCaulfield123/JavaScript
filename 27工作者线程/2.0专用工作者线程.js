// 这里的代码可以直接在html页面的script中书写

// 工作者线程通过work实例化来创建,返回work对象
// 可以用绝对url或相对路径创建
// 注意加载的脚本文件必须与父页面同源
let worker=new Worker(location.href+'example.js',{})
// 第二个参数对象有三个属性,name,type(表明脚本还是模块)与credentials,
// let worker=new Worker('./example.js')

// worker对象作为与创建的工作者线程的实例,有很多的通信连接点也就是很多事件
// 这些事件都可以用worker.addEventListener来添加,主页面调用worker的方法,工作者调用self的方法
worker.onerror=()=>{
  // 工作者线程发送ErrorEvent或抛出错误时触发
}
worker.onmessage=(){
  // 工作者线程向父发送消息是时触发
}
worker.onmessageerror=()=>{
  //消息错误时触发
}
// 此外worker还可以worker.postMessage()通过异步消息事件向线程发送消息
// worker.terminate()立即终止工作者线程

// globalscopeworker.js
console.log(self);//内部self打印出DedicatedWorkerGlobalScope.这个类继承globalworkerscope
// main.js
const worker1=new Worker('./gsworker.js')
console.log(worker1);
// 上方会先打印出main.js中的clg,因为工作者线程启动有延迟,多线程中使用clg确定操作顺序要当心

//DedicatedWorkerGlobalScope增加了以下方法,工作者线程内调用的方法
// self.name self.postMessage()向主页面发送消息 close()关闭线程 importScripts()导入脚本
 



