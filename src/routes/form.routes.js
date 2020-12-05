/*============================================
ANCHOR Importaciones
=============================================*/

const {Router}= require('express');
const router = Router();
const {renderForm, createForm, showForms }= require('../controllers/form.controllers')
/* const {isAuthenticated}=require('../helpers/auth') */
/*============================================
ANCHOR Rutas
=============================================*/
router.get('/contact',renderForm);

router.post('/new-form',createForm);

router.get('/admin/all-forms',showForms)



module.exports=router;