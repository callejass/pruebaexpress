var config=require("./config");
var mongoose=require("mongoose");


var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
	id: String,
    password: String,
    rol: String,
    prueba:String
},{collection:"usuarios"});
var Usuario=mongoose.model("usuarios",usuarioSchema);

mongoose.connect(config.database)

var u=new Usuario({
    id:"aaaa",
    password:"bcdfdrefdf",
    rol:"usuario"
});
u.save(function(err,creado){
    if (err) return console.error(err);
});

Usuario.find({},function(err,usuarios){
   if(err){
       console.log("Error:" + err);
   }
    console.log(usuarios);
});



console.log(config.database);
