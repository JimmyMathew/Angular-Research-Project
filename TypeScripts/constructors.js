var Pointer = /** @class */ (function () {
    function Pointer(x, y) {
        this.x = x;
        this.y = y;
    }
    Pointer.prototype.draw = function () {
        //...
        console.log('X: ' + this.x + " " + 'Y: ' + this.y);
    };
    Pointer.prototype.getDistance = function () {
        //...
    };
    return Pointer;
}());
var pe = new Pointer(); //without initializing the object 
var pa = new Pointer(1, 2); //with initializing the object 
pa.draw();
