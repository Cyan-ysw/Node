var student = require('./student');
var teacher = require('./teacher');

function add(teacherName,students) {
	teacher.add(teacherName);
		students.forEach(function(item,index) {
		student.add(item);
	});

}

//是module的幅度方法
exports.add = add;

// 真实存在的
// module.exports = add