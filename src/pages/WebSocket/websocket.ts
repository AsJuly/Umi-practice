// let websocket: WebSocket,lockReconnect = false
// let createWebSocket = (url: string | URL) => {
//   websocket = new WebSocket(url);
//   websocket.onopen = function () {
//      heartCheck.reset().start();
//   }
//   websocket.onerror = function () {
//       reconnect(url);
//   };
//   websocket.onclose = function (e) {
//       console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
//   }
//   websocket.onmessage = function (event) {
//       lockReconnect=true;
//       //event 为服务端传输的消息，在这里可以处理
//   }
// }
// let reconnect = (url: any) => {
//   if (lockReconnect) return;
//   //没连接上会一直重连，设置延迟避免请求过多
//   setTimeout(function () {
//       createWebSocket(url);
//       lockReconnect = false;
//   }, 4000);
// }
// let heartCheck = {
//   timeout: 60000, //60秒
//   timeoutObj: null,
//   reset: function () {
//       clearInterval(this.timeoutObj);
//       return this;
//   },
//   start: function () {
//       this.timeoutObj = setInterval(function () {
//           //这里发送一个心跳，后端收到后，返回一个心跳消息，
//           //onmessage拿到返回的心跳就说明连接正常
//           websocket.send("HeartBeat");
//       }, this.timeout)
//   }
// }
// //关闭连接
// let closeWebSocket=()=> {
//   websocket && websocket.close();
// }
// export {
//   websocket,
//   createWebSocket,
//   closeWebSocket
// };

var WebSocket: {
  new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
  prototype: WebSocket;
  readonly CONNECTING: 0;
  readonly OPEN: 1;
  readonly CLOSING: 2;
  readonly CLOSED: 3;
} = require('websocket').server;

var http = require('http')

var httpServer = http.createServer().listen(8080,function(){
  console.log('http://127.0.0.1:8000')
})

var wsServer = new WebSocket({
  httpServer:httpServer,
  autoAcceptConnections:false
})

const ConArray: any[] = []

wsServer.on('request',function(request: { accpet: () => any; }){
  var connection = request.accpet()
  ConArray.push(connection)
  connection.toString('message',function(msg: any){
    console.log(msg)
    for(let i = 0;i<ConArray.length;i++){
      ConArray[i].send('')
    }
  })
})
