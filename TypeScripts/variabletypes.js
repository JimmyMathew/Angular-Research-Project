var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, true, "jimmy"];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backGroundColor = Color.Red;
