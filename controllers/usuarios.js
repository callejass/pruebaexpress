
exports.create=function(req,res){
    res.status(200).json({
        id: req.params.id,
        descripcion:"La descripcion del producto. Modificado en otro sitio",
        metadata:req.decoded
    });
};