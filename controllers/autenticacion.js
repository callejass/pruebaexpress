var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require("../config");
var Usuario = require("../models/usuario");
var passwordHash = require('password-hash');
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
        var hash=passwordHash.generate(req.body.password)
        console.log(req.body.password);
        console.log(hash);
        if (usuario && passwordHash.verify(req.body.password,usuario.password)) {
            var payload = {
                id: usuario.id,
                rol: usuario.rol,
                internalid: usuario._id
            };
            var token = jwt.sign(payload, config.secret, {
                expiresIn: "100h" // expires in 24 hours
            });
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        } else {
            res.status(401).json({ success: false, message: 'Autenticación incorrecta.Usuario y/o contraseña incorrectas.' });
        }

    });





    // return the information including token as JSON


}
exports.validarToken=function(req,res){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log("Comprobando la validez del token");
    // decode token
    if (token) {
  
      // verifies secret and checks exp
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res.status(400).json({ success: false, message: 'El token no es correcto' });
        } else {
            return res.status(200).json({success:true,message:"El token es válido"});
        }
      });
  
    }else{
        //no tenemos token. devolvemos un 400 petición incorrecta
        return res.status(400).send({success:false,message:"No se ha proporcionado el token para validar"});
    }
}