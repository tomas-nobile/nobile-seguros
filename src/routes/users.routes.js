const {Router}= require('express');
const router = Router();

const {renderSignupForm,renderSigninForm, logout,signin, signup}= require('../controllers/users.controllers');
const {isAuthenticated}=require('../helpers/auth')

router.get('/signup',renderSignupForm );

router.post('/signup', signup)

router.get('/signin',renderSigninForm );

router.post('/signin', signin);

router.get('/logout',logout)

module.exports=router;