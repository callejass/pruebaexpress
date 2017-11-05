///authentication.js - authentication route 
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var controller=require("../controllers/productos.js");
var express = require('express');
var router = express.Router();
var config=require("../config");
// Todos los productos
router.get('/', function(req,res){
    //aquí iria la comprobación del usuario y contraseña proporcionada en el body
    //y la generación y devolución de un token
    //res.send("token generado correctamente");
    var payload={
        name:"Sergio",
        rol:"administrador"
    };
    var token = jwt.sign(payload,config.secret, {
        expiresIn: "24h" // expires in 24 hours
      });

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });

});



module.exports = router;