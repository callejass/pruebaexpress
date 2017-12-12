var Jugada = require("../models/jugadas");
//var config = require("../config");
//var mongoose = require("mongoose");

//mongoose.connect(config.database);
//recupera todas las jugadas de un usuario
exports.getAll = function (req, res) {


    Jugada.find({ usuario: req.userdata.internalid }, function (err, jugadas) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(jugadas);
        }
    });
}

exports.getOne=function(req,res){
    Jugada.findOne({ _id: req.params.id, usuario: req.userdata.internalid }, function (err, jugada) {
        if (err) res.status(500).send(err);
        res.status(200).json(jugada);
        /* if (jugada) {
            
        } else {
            res.status(404).send("Registro no encontrado");
        } */

    });
}

exports.create = function (req, res) {
    var jugada = new Jugada({
        numero: req.body.numero,
        importe: req.body.importe,
        descripcion: req.body.descripcion,
        usuario: req.userdata.internalid
    });
    jugada.save(function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(jugada);
        }
    })
}
exports.update = function (req, res) {
    Jugada.findOne({ _id: req.body._id, usuario: req.userdata.internalid }, function (err, jugada) {
        if (err) res.status(500).send(err);
        if (jugada) {
            jugada.numero = req.body.numero;
            jugada.importe = req.body.importe;
            jugada.descripcion = req.body.descripcion;
            jugada.save(function (err) {
                if (err) res.status(500).send(err);
                res.status(202).json(jugada);
            });
        } else {
            res.status(404).send("Registro no encontrado");
        }

    });
}
exports.delete=function(req,res){
    console.log("A borrar el " + req.params.id);
    Jugada.findOne({ _id: req.params.id,usuario:req.userdata.internalid}).remove(function(err){
        if (err) res.status(500).send(err);
        
                res.status(204).send("Borrado correcto");
    });
    /* Jugada.remove(, function (err) {
        
        // removed!
      }); */
}