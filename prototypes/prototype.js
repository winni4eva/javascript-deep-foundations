'use strict';

// A constructor makes an object based on its own prototype (class template) => Thats how we would expect a language with class inheritance to work
// A constructor makes an object linked to its prototype => Thats how js works
// Its like maintaining a link between an object and its class template
// Constructor call => new myFunc();

//The 4 things that happen when the new keyword is used in front of a function
// 1. Creates a new object out of thing air
// 2. The new object gets linked
// 3. The new object is passed into the function as the this context
// 4. The new object is returned if nothing is returned by the function

function Smash(hero){
    this.hero = hero;
}

Smash.prototype.identify = function(){
    return `${this.hero} smash !!!`;
}

var hulk = new Smash('hulk');
var strange = new Smash('strange');

hulk.yell = function(){
    console.log(`Hello ${this.identify()} .`);
}

console.log(hulk.constructor === Smash);
console.log(hulk.constructor === strange.constructor);
console.log(hulk.__proto__ === Smash.prototype); // Standardized way of getting an objects prototype __proto__
console.log(hulk.__proto__ === strange.__proto__);

console.log(hulk.yell());

console.log(hulk.__proto__ === Object.getPrototypeOf(strange)); // ES5 getting object prototype with helper method
console.log(hulk.constructor.prototype === strange.__proto__); // If you want to get hulk's prototype object without using __proto__ you need to go through 
// the constructor, the only problem here is that both the constructor and prototype properties are writable/changeable if that happens
// we can no longer find an objects prototype link. Having __proto__ as a standardized way of achieving this really helps
// Adding methods to your prototype therefore makes them accessible throughout the prototype chain
// Just like a public api, this is counter to the module pattern which allows us to encapsulate or hide implementation details
// Dont try mixing module pattern of code with the protoype pattern of code
// The main reason why people use the prototype system is to get a feel of the class pattern in javascript

//////////////////////////////// ES6 CLASSES /////////////////////////////

class Swirl {
    constructor(hero) {
        this.me = hero;
    }

    identify() {
        return `I am ${this.me}`;
    }

    static say() {
        return `I am all over`;
    }
}

var storm = new Swirl('storm');
var spider = new Swirl('spider man');

console.log(storm.identify());
console.log(spider.identify());

// We get the exact behaviour of the prototype system with a cleaner syntax
// We also get inheritance which is basically going along the prototype chain
class Mutation extends Swirl {
    trait() {
        return `I inherited ${this.identify()}`; //Inheritance
    }

    identify() {
        return `I am ${super.identify()}`; 
        // We can explicitly go up the prototype chain with the super keyword
        // Even works when we are overriding identify / shadowing
    }
}

// The static keyword makes the say method available on all our classes templates
console.log(Swirl.say()); 
console.log(Mutation.say());


////////////////////////////////////// BEHAVIOUR DELEGATION AS A SOFTWARE DESIGN PATTERN besides class and functional programming /////

var AuthCOntroller = {
    authenticate(){
        var details = [this.email, this.password]; //the email and password dont exist here but can be referenced bcos of delegation
        this.handleResponse.bind(this);
    },
    handleResponse(resp){
        if(!resp.ok) {
            this.displayError(resp.msg)
        }
    }
};

// We are linking the two objects using Object.assign and Object.create
var LoginController = Object.assign(Object.create(AuthCOntroller), {
    onSubmit(){
        this.username = 'adam'; // this.$username.val(); grab form value
        this.password = 'secret'; // this.$password.val(); grab form value
        this.authenticate(); // authenticate method doesnt exist on loginController but we are calling it because we have merged both controllers
    },
    displayError(msg){
        console.log(msg);
    }
}); 

// This is like virtual composition, the two objects become one during execution and diverge as separate entities afterwards


