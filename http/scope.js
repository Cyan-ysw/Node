var globalVeriable = 'This is global veriable';
function globaleFunction() {
  var localVeriable = 'This is local veriable';
  console.log('visit global veriable');
  console.log(globalVeriable);
  console.log(localVeriable);
  globalVeriable = 'This is changed veriable';
  console.log(globalVeriable);
  function localFunction() {
    var innerLocalVeriable = 'This is inner local veriable';
    console.log('Visit global /local / innerLocal');
    console.log(innerLocalVeriable);
  }
  localFunction();

}

globaleFunction();