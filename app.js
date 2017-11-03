var productos=require("./routes/productos.js");
var express=require("express");
var app=express();




/*app.get("/",function(req,res){
    res.send("Hola mundo");
});


app.get("/prueba/",function(req,res){
    res.send("Hola mundo prueba");
});
*/

app.use("/api/v1/productos",productos);



app.listen("3000",function(){
    console.log("Escuchando en el puerto 3000");

});
console.log("una prueba");
