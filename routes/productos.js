// productos.js - productos route module

var controller=require("../controllers/productos.js");
var express = require('express');
var router = express.Router();
var authorize=require("../authorize");

router.use(authorize.all);
// Todos los productos
router.get('/', controller.getAll);

// Detalle de un producto
//lo protejemos
router.get('/:id',authorize.god);
router.get('/:id',controller.get);

module.exports = router;