var jwt = require('jsonwebtoken'); 
var config=require("./config");
function authorizeRol(req,res,next,rol){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log("Autorizando para -" + rol + "-");
    // decode token
    if (token) {
      
      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          if(rol){
            //si se le ha indicado un rol chequeo que el rol indicado coincide con el del token
            if(rol!=decoded.rol){
                return res.status(401).send({ 
                    success: false, 
                    message: 'Hay que ser Dios para acceder a esta sección' 
                });
            }

          }
          req.decoded = decoded;    
          next();
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  
    }
}
exports.all=function(req, res, next) {
    
      return authorizeRol(req, res, next);
      // check header or url parameters or post parameters for token
      
    };


exports.god=function(req,res,next){
    return authorizeRol(req, res, next,"god");
}



//module.exports =authorize;