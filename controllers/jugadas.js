var Jugada = require("../models/jugadas");
//var config = require("../config");
//var mongoose = require("mongoose");

//mongoose.connect(config.database);
exports.getAll = function (req, res) {
    
    Jugada.find({}, function (err, users) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(users);
        }
    });
    

}