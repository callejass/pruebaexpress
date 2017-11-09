var Usuario = require("../models/usuario");
//var config = require("../config");
//var mongoose = require("mongoose");

//mongoose.connect(config.database);
exports.getAll = function (req, res) {
    
    Usuario.find({}, function (err, users) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(users);
        }
    });
    

}
exports.get = function (req, res) {

}
exports.create = function (req, res) {
    res.status(200).json({
        id: req.params.id,
        descripcion: "La descripcion del producto. Modificado en otro sitio",
        metadata: req.decoded
    });
};