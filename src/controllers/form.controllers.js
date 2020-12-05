const formCtrl={};

const Form= require('../models/Form');


formCtrl.renderForm= (req,res)=>{
    res.render('forms/form')
};


formCtrl.createForm= async (req,res)=>{
    const {name,email,phoneNumber,message,methodContact,date,schedule}= req.body;
    const newForm= new Form({name,email,phoneNumber,message,contactMethod,date,time});
    await newForm.save();
    console.log(newForm);
    req.flash('success_msg', 'Send');
    res.redirect('/contact');

}


formCtrl.showForms= async(req,res)=>{
    const allForms= await Form.find();
    res.render('forms/all-forms',{allForms});

}


module.exports= formCtrl;