'use strict';
// If Lexical scope is fixed and predictable then the this keyword provides us with dynamic scope in js
// The beahaviour of the this keyword

function foo(){
    console.log(this.bar);
}

var bar = 'walking';
var o2 = {bar: 'swimming', foo};
var o3 = {bar:'running', foo};

//****************************

//Default Binding
//console.log('Default Binding');
// Default binding rule means when bar is not found here move up the lexical scope 
// to find a variable with bar which we find on line 5 => walking
// Now an error when running in strict mode
//foo(); 

//Implicit Binding
console.log('============== Implicit Binding =============');
o2.foo() // looks for bar within the context of our o2 object => swimming
o3.foo() // looks for bar within the context of our o2 object => running

//Explicit Binding
console.log('=========== Explicit Binding =============');
foo.apply(o2); // We specify the object that should be referenced through apply => swimming
foo.call(o3); // => running

//Hard Binding
console.log('=============== Hard Binding ==============');
var fakeFoo = foo;
foo = function(){
    fakeFoo.call(o2);
}

foo(); //We have hard bound the object 02 to our foo function so no matter the context it will use ob2 => swimming
foo.call(o3); // The call function for foo to use 03 is ignored => swimming