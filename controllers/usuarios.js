var Usuario = require("../models/usuario");
var passwordHash = require('password-hash');
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
    Usuario.findOne({id:req.params.id}, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            if(user){
                res.json(user);
            }else{
                res.status(404).send("No existe");
            }
            //res.json(users);
        }
    });
}

exports.create = function (req, res) {

    var hash=passwordHash.generate(req.body.password);
    console.log(req.body.password);
    console.log(hash);
    var usuario = new Usuario({
        id: req.body.user,
        password: hash
    });
    usuario.save(function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(usuario);
        }
    })
};
