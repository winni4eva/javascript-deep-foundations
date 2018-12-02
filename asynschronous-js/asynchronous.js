'use strict';

// Javascript as a language is synchronous in nature, statements are executed one line at a time
// This system is perfect until we need to make requests for external data that take time to resolve
// Going by its synchronous nature we would have to wait for this intensive task to complete before we proceed 
// We could be doing a lot of things on the browser instead of waiting for the data, this is where asynchronous program could be useful
// NB: setTimeout isnt a js feature but a browser feature

// Example
var list = ['apples', 'oranges', 'bananas'];

function display(){
    console.log('I was just logged');
}

setTimeout(display, 2000); //We dont wait for the output we continue with program execution

console.log(list);
