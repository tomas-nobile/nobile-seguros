const carCtrl={};

const Car = require('../models/Car');
const Info = require('../helpers/cost');


carCtrl.renderAdd= (req,res)=>{
    res.render('car/add-car')
};


carCtrl.saveCar= async(req,res)=>{
     
    const {brand,model,price}= req.body;
    
    const info= new Info(brand,model,price);
    const {cost,costP}= info.setCost();
    const newCar= new Car({brand,model,price,cost,costP});
    await newCar.save();
    console.log(newCar);
    req.flash('success_msg', 'Car added sucessfully')
    res.redirect('/admin/all-cars');
    
}

carCtrl.showCars= async(req,res)=>{
    const allCars= await Car.find();
    res.render('car/all-cars',{allCars});

}


carCtrl.deleteCar= async(req,res)=>{
   await Car.findByIdAndDelete(req.params.id)
   req.flash('success_msg', 'Car deleted sucessfully')
   res.redirect('/admin/all-cars') 

}

carCtrl.editCar= async(req,res)=>{
    const car= await Car.findById(req.params.id);
    res.render('car/edit-car', {car})

}

carCtrl.updateCar= async(req,res)=>{
    const  {brand,model,price}= req.body;
    
    const info= new Info(brand,model,price);
    const {cost,costP}= info.setCost();
    await Car.findByIdAndUpdate(req.params.id, {brand,model,price,cost,costP} )
    
    /* req.flash('success_msg', 'Car updated sucessfully'); */
    res.redirect('/admin/all-cars');
}

module.exports=carCtrl;