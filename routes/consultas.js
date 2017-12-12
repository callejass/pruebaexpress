// productos.js - productos route module

var controller=require("../controllers/consultas.js");
var express = require('express');
var router = express.Router();
var authorize=require("../authorize");

router.use(authorize.all);
// la consulta de los premios principales
router.get('/principales', controller.consultaPrincipales);

router.get("/estado",controller.consultaEstado);
router.get("/ultimaactualizacion",controller.consultaFechaActualizacion);
// Detalle de un producto
//lo protejemos
//router.get('/:numero',authorize.all);
router.get('/:numero',controller.consultaNumero);

module.exports = router;