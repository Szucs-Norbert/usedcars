"use strict";
/*
* File: app.ts
* Author: Szűcs Norbert, Rohrbacher Marcell János
* Copyright: 2021, Szűcs Norbert, Rohrbacher Marcell János
* Group: Szoft II/N
* Date: 2021-12-08
* Github: https://github.com/Szucs-Norbert/
          https://github.com/Marci971104/
* Licenc: GNU GPL
*/
exports.__esModule = true;
var car_1 = require("./car");
var url = 'https://szit.hu/download/adat/cars.json';
var cars = [];
var ul = document.querySelector('#cars');
fetch(url)
    .then(function (Response) { return Response.json(); })
    .then(function (data) {
    data.forEach(function (car) {
        var car2 = new car_1.Car(car.id, car.plate, car.color, car.brand, car.year, car.capacity, car.fule, car.price, car.sold);
        cars.push(car2);
        console.log(car.plate);
    });
    cars.forEach(function (car) {
        var li = document.createElement('li');
        li.textContent = car.plate;
        ul.appendChild(li);
    });
});
