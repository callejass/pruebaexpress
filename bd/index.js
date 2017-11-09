const mongoose = require('mongoose');
const config=require("../config");
mongoose.connect(config.database,function(err,db){
    if(err){
        console.log(err);
    }else{
        console.log("Conexión con la base de datos correcta");
    }
});


module.exports = mongoose;