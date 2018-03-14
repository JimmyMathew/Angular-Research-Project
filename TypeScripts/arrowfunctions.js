//old JS way 
var doSomething = function (message) {
    console.log(message);
};
//Arrow functions
var noParams = function () { console.log("Jimmy"); };
var withParams = function (message) { console.log(message); };
//If there is one line of code in the method we can also avoid the curly braces
var noCurlyBraces = function (message) { return console.log(message); };
//Method calls
noParams();
withParams("Mathew");
noCurlyBraces("Fusion");
