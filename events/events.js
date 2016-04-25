var events = require('events');

// create eventEmitter
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');

   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
};
// 绑定 connection事件处理程序
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function() {
    console.log('数据接收成功');
});

// 触发connection 事件

eventEmitter.emit('connection');
console.log('程序执行完毕');


