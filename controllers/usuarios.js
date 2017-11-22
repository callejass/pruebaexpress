var Usuario = require("../models/usuario");
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require("../config");
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
    Usuario.findOne({ id: req.params.id }, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            if (user) {
                res.json(user);
            } else {
                res.status(404).send("No existe");
            }
            //res.json(users);
        }
    });
}

exports.create = function (req, res) {

    
    Usuario.findOne({ id: req.body.user }, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            //Si el usuario existe devolveos un error 400
            if (user) {
                res.status(400).send("El nombre de usuario ya existe");
            } else {

                var hash = passwordHash.generate(req.body.password);
                console.log(req.body.password);
                console.log(hash);
                var usuario = new Usuario({
                    id: req.body.user,
                    password: hash,
                    rol: "usuario"
                });
                usuario.save(function (err) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        //le añado un token de autenticación a la respuesta
                        var payload = {
                            id: usuario.id,
                            rol: usuario.rol,
                            internalid: usuario._id
                        };
                        var token = jwt.sign(payload, config.secret, {
                            expiresIn: "100h" // expires in 24 hours
                        });
                        usuario.password = null;
                        usuario.token = token;
                        var registrodata = {
                            usuario: usuario,
                            token: token
                        }
                        res.status(201).json(registrodata);
                    }
                })
            }
            //res.json(users);
        }
    });




};
