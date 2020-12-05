

/*============================================
ANCHOR Constructores
=============================================*/

/* const { db } = require("../models/Car"); */

module.exports= class Info{
    constructor(brand, model,price,year){
        this.brand= brand;
        this.model= model;
        this.price= price; 
        this.year= year;
    }

    setCost(){

        let cost =this.price*0.007,
            costP=cost*1.3;

        return {cost,costP};

    }
   /*  setQuote(){

        const {}= db.cars.filter({"model":{this.model}})
    }
 */
}