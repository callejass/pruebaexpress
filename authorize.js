var jwt = require('jsonwebtoken');
var config = require("./config");

exports.all = function (req, res, next) {

  return authorizeRol(req, res, next);
  // check header or url parameters or post parameters for token

};


exports.god = function (req, res, next) {
  return authorizeRol(req, res, next, "god");
}

function authorizeRol(req, res, next, rol) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  console.log("Autorizando para -" + rol + "-");
  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        console.log(decoded);
        // if everything is good, save to request for use in other routes
        if (rol && rol != decoded.rol) {
          //si se le ha indicado un rol chequeo que el rol indicado coincide con el del token

          return res.status(403).send({
            success: false,
            message: 'Hay que ser Dios para acceder a esta sección'
          });

        }
        //pongo en la petición lo qu ehemos decodificado (ver si poner el usuario y el rol por separado)
        req.user=decoded;/* {
          id:decoded.id,
          internalid:decoded.internalid,
          rol:decoded.rol
        }; */
        //decoded = decoded;
        //pasamos al siguiente middleware que se haya definido   
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'No token provided.'
    });

  }
}

//module.exports =authorize;