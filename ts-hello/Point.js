"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x +
            '\nY:' + this.y);
    };
    Point.prototype.distance = function (point1, point2) {
        var distance = ((point1.x - point2.x) ^ 2 + (point1.y - point2.y) ^ 2) ^ (1 / 2);
        console.log(distance);
    };
    return Point;
}());
exports.Point = Point;
