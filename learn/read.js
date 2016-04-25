/** @type {fs} 导入fileSystem module */
var fs  = require('fs');
var path = require('path');

// _dirname 绝对路径
/** [[options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性] */
fs.readFile(path.join(__dirname,'input.txt'), {flag:'r',encoding:'utf8'}, function(err,data) {

  if (err) {
     console.log(err);
  } else {
    console.log(data);
  }
});





