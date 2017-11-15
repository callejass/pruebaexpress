var controller=require("../controllers/usuarios.js");
var express = require('express');
var router = express.Router();
//var authorize=require("../authorize");

//router.use(authorize.all);
// Todos los productos


// Detalle de un producto
//lo protejemos
/* router.get('/:id',authorize.god); */
router.get('/', controller.getAll);
router.get('/:id',controller.get);
router.post('/',controller.create);
module.exports = router;