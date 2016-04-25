---
layout: default
title: Ncallback.js
---

/**
 * @param  {参数}
 * @param  {参数}
 * @return {返回值}
 */
function function_name(a,b){
	return a + b;
}

function learn(something) {
     console.log(something);
}

function we(callback, something) {
	something += ' is  cool'
	callback(something);
}

we(learn,"nodejs")




