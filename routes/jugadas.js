var authorize=require("../authorize");
var controller=require("../controllers/jugadas");
var express = require('express');
var router = express.Router();
//var authorize=require("../authorize");

//router.use(authorize.all);
// Todos los productos


// Detalle de un producto
//lo protejemos
/* router.get('/:id',authorize.god); */
router.use('/',authorize.all);

router.get('/', controller.getAll);
router.delete("/",controller.delete);
router.post("/",controller.create);
router.put("/",controller.update);
//router.get('/:id',controller.get);

module.exports = router;