const {Schema, model}= require('mongoose');

/*============================================
Esquema
=============================================*/

const CarSchema = new Schema({
    
    brand: {type: String, required:true},
    model: {type: String, required:true},
    price: {type: String, required:true},
    cost: {type: String, required:true},
    costP: {type: String, required:true},
    year: {type:Number}},
    {timestamps:true}
)

module.exports= model('Car',CarSchema,'cars');
