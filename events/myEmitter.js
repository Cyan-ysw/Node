// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//   EventEmitter.call(this);
// }
// // 实现对象间原型继承 的函数
// util.inherits(MyEmitter, EventEmitter);

// var myEmitter = new MyEmitter();
// myEmitter.on('evnet',function(){
//   console.log('an event occured');
// });
// myEmitter.emit('evnet');


// ES6
// const EventEmitter = require('events');
// const util = require('util');

// function MyEmitter() {
//   EventEmitter.call(this);
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


'use strict';
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
// myEmitter.on('event',() => {
//     console.log('an event occurred!');
// });

// myEmitter.emit('event');


//-------------
// 传递参数，this给听众
// myEmitter.on('event',function(a,b){
//   console.log(a,b,this);
// });

// myEmitter.emit('event','a','b');

// myEmitter.on('event',(a,b) => {
//      console.log(a,b,this);
// });
// myEmitter.emit('event','a','b');
// 
// ---------------
// 异步和同步

// myEmitter.on('event',(a,b) => {

//   // 下一个event loop，给其他的io事件一个执行的机会
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });

//   setTimeout(function() {
//       console.log('setTimeout');
//   },0);

//   // nextTick虽然也会异步执行，但是不会给其他io事件执行的任何机会，会在本次event loop执行完后
//   process.nextTick(function() {
//     console.log('nextTick');
//   });

//   console.log('执行过程');
// });

// myEmitter.emit('event','a','b');
// out : 
// 执行过程
// nextTick
// setTimeout
// ------------------------------
// handle events only once

// var m = 0;
// //使用eventEmitter.once()方法，它是可以注册侦听器立即注销后它叫做。
// myEmitter.once('event',() => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// myEmitter.emit('event'); // ignored

// ------------
// error events

// myEmitter.on('event',(err) => {
//   console.log('whoops there wa an error');
// });
// myEmitter.emit('event',new Error('whoops'));

// // --------------
// //  newListener
// myEmitter.once('newListener',(event,listener) => {
//     if (event === 'event') {
//         myEmitter.on('event',() => {
//           console.log('B');
//         });
//     }
// });

// myEmitter.on('event' ,() => {
//   console.log('A');
// });

// myEmitter.emit('event');
//  ---------
//  // listener count
//  
// myEmitter.setMaxListeners(2);

// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});

// console.log(EventEmitter.listenerCount(myEmitter,'event'));
// --------------------

var callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

var callbackB = () => {
  console.log('B');
};

myEmitter.on('event',callbackA);
myEmitter.on('event',callbackB);

myEmitter.emit('event');
myEmitter.emit('event');

















