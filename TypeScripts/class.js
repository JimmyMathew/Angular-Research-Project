var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //...
        console.log('X: ' + this.x + " " + 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function () {
        //...
    };
    return Point;
}());
var p = new Point(); //initializing the object 
p.x = 1;
p.y = 2;
p.draw();
