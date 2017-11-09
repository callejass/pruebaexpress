///authentication.js - authentication route 

var controller=require("../controllers/autenticacion.js");
var express = require('express');
var router = express.Router();

// Todos los productos
router.post('/',controller.autenticar);



module.exports = router;