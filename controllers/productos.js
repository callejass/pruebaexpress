
exports.getAll= function(req,res){
   res.send("Todos los productos");
};


exports.get=function(req,res){
    res.send("El detalle del producto " + req.params.id);
};

