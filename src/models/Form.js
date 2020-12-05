const {Schema, model}= require('mongoose');

const FormSchema = new Schema({
    
    name: {type: String, required:true},
    email: {type: String, required:true},
    phoneNumber: {type: String, required:true},
    message: {type: String, required:true},
    contactMethod: {type: String, required:true},
    date: {type: Date},
    time: {type: String}},
    {timestamps:true}
)


module.exports= model('Form',FormSchema,'forms');