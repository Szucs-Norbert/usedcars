"use strict";
/*
* File: app.ts
* Author: Szűcs Norbert, Rohrbacher Marcell János
* Copyright: 2021, Szűcs Norbert, Rohrbacher Marcell János
* Group: Szoft II/N
* Date: 2021-12-08
* Github: https://github.com/Szucs-Norbert/
          
* Licenc: GNU GPL
*/
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
        var _this = this;
        this.id = 0;
        this.plate = "";
        this.color = "";
        this.brand = "";
        this.year = 0;
        this.capacity = 0;
        this.fule = "";
        this.price = 0;
        this.sold = "";
        this.lekerBrand = function () { return _this.brand; };
    }
    return Car;
}());
exports.Car = Car;
