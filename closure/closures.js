//////////////// Closure ////////////////
// A function that remembers variables or functtions in its lexical scope even when executed in a different scope

foo(); // Hoisting => Calling function foo before its declared

///////////////////// Methods ////////////////
function foo() {
    var baz = 'I am running out of scope';
    bar(function closure(){
        console.log(baz);
    });
}

function bar(func) {
    func();
}