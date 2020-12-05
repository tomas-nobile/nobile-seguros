const helpers= {};

helpers.isAuthenticated= (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin')
}

module.exports = helpers;