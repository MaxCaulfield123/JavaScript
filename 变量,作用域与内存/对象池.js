// https://blog.csdn.net/fareast_mzh/article/details/81463797
let factory=(function(){
  let arr=[]//形成闭包
  return {
    create(){//获取对象
      if(arr.length==0){
        console.log('新建了元素!');
        var div=document.createElement('div')
        return div;
      }else{//池中有元素,则拿出来一个用
        return arr.shift()
      }
    },
    recycle(i){//回收元素,放入池中(本例子没初始化元素)
      arr.push(i)
    }
  }
})()
let arr1=['max','chloe']
let waitToRecycle=[]//收集要回收的元素
arr1.forEach((i,index)=>{
  let div=factory.create();
  div.innerHTML=i;
  document.body.appendChild(div)
  waitToRecycle.push(div)
})//调用对象池(对象池没有对象则会自动新建)

//回收对象到对象池
let arr3=[]
waitToRecycle.forEach((i,index)=>{
  factory.recycle(i)//其实就是将dom(引用类型)对象放入了闭包的变量中!!!
  // 为啥把dom元素放入闭包的数组中,页面上就会消失呢?
  // 因为闭包中的数据,外界包括浏览器都访问不到??
})

let arr2=['js','rachel']
//再次放入新元素到html中
arr2.forEach((i,index)=>{
  let div=factory.create();
  div.innerHTML=i;
  document.body.appendChild(div)//此时页面上只显示js和rachel,因为max与chloe的dom元素被回收到闭包内存了!
  waitToRecycle.push(div)
})