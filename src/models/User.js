const {Schema, model}= require('mongoose');
const bcrypt= require('bcryptjs');
const { number } = require('assert-plus');

const UserSchema= new Schema({
    name: {type: String, required: true},
    /* lastname: {type: String}, */
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true}
    /* brand: {type: String},
    model: {type: String},
    year: {type: Number},
    price:{type: Number},
    admin:{type: Boolean}, */
},
    {timestamps:true}
)


UserSchema.methods.encryptPassword= async password =>{
   const salt= await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
};


UserSchema.methods.matchPassword= async function (password){
    return await bcrypt.compare(password,this.password)

}

/*============================================
ANCHOR Model
=============================================*/

module.exports= model('User',UserSchema,'users')