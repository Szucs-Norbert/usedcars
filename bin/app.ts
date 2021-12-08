/*
* File: app.ts
* Author: Szűcs Norbert, Rohrbacher Marcell János
* Copyright: 2021, Szűcs Norbert, Rohrbacher Marcell János
* Group: Szoft II/N
* Date: 2021-12-08
* Github: https://github.com/Szucs-Norbert/
          
* Licenc: GNU GPL
*/


interface icar {
    id:number;
    plate:string;
    color:string;
    brand:string;  
    year:number;
    capacity:number;
    fule:string;
    price:number;
    sold:string;
    lekerBrand: () => string;
}

export class Car implements icar {
    id:number= 0;
    plate:string= "";
    color:string= "";
    brand:string= "";  
    year:number= 0;
    capacity:number= 0;
    fule:string= "";
    price:number= 0;
    sold:string= "";
    lekerBrand = () => this.brand;
}

