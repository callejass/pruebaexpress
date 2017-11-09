
var mongoose=require("mongoose");


var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
	id: String,
    password: String,
    rol: String,
    prueba:String
},{collection:"usuarios"});
module.exports=mongoose.model("usuarios",usuarioSchema);