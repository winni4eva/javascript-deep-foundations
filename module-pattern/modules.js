//////////////// Module Pattern ////////////////
// Encapsulating implementation details with an IIFIE that's executed at least once and exposing a public api

var api = (function IIFIE(){
    var title = 'Mr';

    var publicAPI = {
        name,
        age
    }; // ES6 concise properties

    // ************************************
    function name(){
        return 'Adam Winni';
    }

    function age(){
        return 145;
    }

    function account(){
        return 12312312321321;
    }
    
    return publicAPI;
})();

const name = api.name();
const age = api.age();

//We cant access api.account() since its hidden from our public api we are exposing

console.log(`My name is ${name}`);
console.log(`My age is ${age}`);
