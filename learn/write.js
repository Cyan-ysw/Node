var fs = require('fs');
var path = require('path');

var content = 'hello node js 通过writeFile函数写入的内容';
var buff = new Buffer(content);


fs.writeFile(path.join(__dirname,'wirte.txt'), buff, 'utf8', function(err){
    if (err) {  
      console.log('写入失败: ' + err);
    } else {
      console.log('写入成功');
    }
});


