const mongoose= require('mongoose');

const  {DBNS_MONGODB_HOST, DBNS_MONGODB_DATABASE}= process.env;
const MONGODB_URI = `mongodb://${DBNS_MONGODB_HOST}/${DBNS_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true
})
    .then(db=>console.log('database is conected'))
    .catch(err=>console.log(err));