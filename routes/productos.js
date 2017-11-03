// productos.js - productos route module

var controller=require("../controllers/productos.js");
var express = require('express');
var router = express.Router();

// Todos los productos
router.get('/', controller.getAll);

// Detalle de un producto
router.get('/:id',controller.get);

module.exports = router;