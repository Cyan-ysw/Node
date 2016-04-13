var klass = require('./klass')

exports.add = function(klass) {
	klass.forEach(function(item, index) {
		var _klass = item
		var teacherName = item.teacherName
		var student = item.students

		klass.add('Scott',['one','two'])
	})
	
}