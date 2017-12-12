///authentication.js - authentication route 

var controller=require("../controllers/autenticacion.js");
var express = require('express');
var router = express.Router();


router.post('/',controller.autenticar);
router.get("/validartoken",controller.validarToken);


module.exports = router;