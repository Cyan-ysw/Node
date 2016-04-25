// function pet(words) {
//   this.words = words;
//   console.log(this.words);
//   console.log(this === global);
// }
// // this指向全局
// pet('>>>');
// 
 function Pet(words) {
   this.words = words;
   this.speak = function(){
      console.log(this.words);    
      console.log(this);
   };
 }

 var cat = new Pet('>>>');
 cat.speak();