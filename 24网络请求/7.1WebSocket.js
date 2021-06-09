// socket 插座,窝
// webSocket是与服务器长时双工的通信,数据更轻量化,同时使用ws协议而非http协议
// new WebSocket(ws协议的url)创建socket对象
let socket = new WebSocket('ws://127.0.0.1:5500/7.0WebSocket.html');
// socket.readyState属性表示连接状态 正在已经,建立关闭
console.log(socket.readyState);

// 使用socket.send(数据)向服务器发送数据
socket.send('waibiwaibi');
socket.send(new Blob(['f']))

// socket使用onmessage事件接受消息;
socket.onmessage=function(event){
  console.log(event.data);//服务器发送的数据在e.data中
}
//socket还有onopen连接成功,onerror发生错误,onclose便捷关闭三个事件
// socket的事件只支持dom0风格的事件添加,不支持dom2的addeventlistener
socket.onerror=function(e){
  console.log(e.wasClean,e.code,e.reason);//后两者是服务器发来的信息
}

// socket.close()关闭连接
socket.close()










