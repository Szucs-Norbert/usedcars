"use strict";
/*
* File: Car.ts
* Author: Szűcs Norbert, Rohrbacher Marcell János
* Copyright: 2021, Szűcs Norbert, Rohrbacher Marcell János
* Group: Szoft II/N
* Date: 2021-12-08
* Github: https://github.com/Szucs-Norbert/
          https://github.com/Marci971104/
* Licenc: GNU GPL
*/
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(id, plate, color, brand, year, capacity, fule, price, sold) {
        this.id = id;
        this.plate = plate;
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.capacity = capacity;
        this.fule = fule;
        this.price = price;
        this.sold = sold;
    }
    return Car;
}());
exports.Car = Car;
