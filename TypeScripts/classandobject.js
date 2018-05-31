var Paintclass = /** @class */ (function () {
    function Paintclass() {
    }
    Paintclass.prototype.doSomething = function () {
        console.log(this.x);
        console.log(this.y);
        console.log("test");
    };
    return Paintclass;
}());
var paintObj = new Paintclass();
paintObj.x = 5;
paintObj.y = 6;
paintObj.doSomething();
