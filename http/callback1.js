var a = 0;

function printInfo() {
  console.log(a);
}

function plus(callback) {
  setTimeout(function(){
    a += 1;
    callback();
  },1000);
}

plus(printInfo);
