var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require("../config");
var Usuario = require("../models/usuario");
exports.autenticar = function (req, res) {
    //aquí iria la comprobación del usuario y contraseña proporcionada en el body
    //y la generación y devolución de un token
    //res.send("token generado correctamente");
    var userid = req.body.user;
    /* console.log(req.body);
    console.log(userid);
    console.log(req.body.password); */
    Usuario.findOne({ id: userid }, function (err, usuario) {
        if (err) throw err;
        if (usuario && usuario.password == req.body.password) {
            var payload = {
                id: usuario.id,
                rol: usuario.rol,
                internalid: usuario._id
            };
            var token = jwt.sign(payload, config.secret, {
                expiresIn: "24h" // expires in 24 hours
            });
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        } else {
            res.json({ success: false, message: 'Autenticación incorrecta.Usuario y/o contraseña incorrectas.' });
        }

    });





    // return the information including token as JSON


}