const User = require("../models/User");
const passport= require('passport')
const usersCtrl = {}; 

usersCtrl.renderSignupForm = (req,res) =>{ 
    res.render('user/signup');
};

usersCtrl.signup= async(req,res)=>{
    const errors= [];
    const {name,email,password,confirm_password}= req.body;
    if(password != confirm_password){
        errors.push({text: 'Password do not match'})
    }
    if(password.length < 4 ){
        errors.push({text:"Password must be at least 4 characters."})
    }
    if(errors.length > 0){
        res.render('users/signup',{
            errors,
            name,
            email
        })
    }else{
       const emailUser= await User.findOne({email:email});
       if(emailUser){
           req.flash('error_msg', 'The email is already in use');
           res.redirect('/signup');
       }else{
           const newUser = new User({name,email,password});
           newUser.password= await newUser.encryptPassword(password);
           await newUser.save();
           req.flash('success_msg', 'You are registred')
           res.redirect('/signin');
       }
    }
};

usersCtrl.renderSigninForm= (req,res)=>{
    res.render('user/signin');
};

usersCtrl.signin=passport.authenticate('local',{
    failureRedirect: '/signin',
    successRedirect: '/',
    failureFlash: true 
})

usersCtrl.logout= (req,res)=>{
    req.logout();
    req.flash('sucess_msg','You are logged out now');
    res.redirect('/signin')
};

module.exports= usersCtrl;