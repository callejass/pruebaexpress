
var mongoose=require("mongoose");

var Usuario=require("./usuario");
var Schema = mongoose.Schema;

var jugadaSchema = new Schema({
	numero: Number,
    importe: Number,
    descripcion: String,
    usuario:{type:Schema.ObjectId,ref:"Usuario"}
},{collection:"jugadas"});

module.exports=mongoose.model("jugadas",jugadaSchema);