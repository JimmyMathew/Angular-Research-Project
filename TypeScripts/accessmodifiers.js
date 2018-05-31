"use strict";
exports.__esModule = true;
var Pointerspeed = /** @class */ (function () {
    function Pointerspeed(x, y) {
        this.x = x;
        this.y = y;
    }
    Pointerspeed.prototype.draw = function () {
        //...
        console.log('X: ' + this.x + " " + 'Y: ' + this.y);
    };
    Pointerspeed.prototype.getDistance = function () {
        //...
    };
    return Pointerspeed;
}());
var pet = new Pointerspeed(); //without initializing the object 
var pal = new Pointerspeed(1, 2); //with initializing the object 
pet.draw();
//We can also minimize the class code like shown below
var Prettypointer = /** @class */ (function () {
    function Prettypointer(x, y) {
        this.x = x;
        //automatically initializes. So there is no need for this and initialize it again
    }
    Object.defineProperty(Prettypointer.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new console.error('Value cannot be less that 0');
            else
                this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Prettypointer;
}());
//Now
var pret = new Prettypointer(1, 2);
console.log(pret.X);
//pret.X=-5;// To throw an exception
pret.X = 8; //Legit value
//We are using this from another module
// let pm=new PointerModule();
// pm.X=5;
