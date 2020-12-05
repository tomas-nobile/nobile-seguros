const {Router}= require('express');
const router = Router();
const {renderAdd, saveCar, showCars, deleteCar, editCar, updateCar }= require('../controllers/car.controllers');

router.get('/admin/add-car', renderAdd);

router.post('/admin/new-car', saveCar);

router.get('/admin/all-cars', showCars);

router.get('/admin/edit/:id',editCar);

router.put('/admin/edit/:id',updateCar)

router.delete('/admin/delete/:id', deleteCar);


module.exports=router;