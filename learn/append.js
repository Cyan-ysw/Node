var fs = require('fs');
var path =require('path');

var content = 'append content';
var tmpPath = path.join(__dirname,'write.txt');

fs.appendFile(tmpPath, content, 'utf8', function(err) {

  if(err) {
    console.log(err);
  } else {
    console.log('追加成功');
  }

});