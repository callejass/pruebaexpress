
var express     = require('express');

var bodyParser  = require('body-parser');
var morgan      = require('morgan');
//var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file


//las rutas de nuestra api
var productos=require("./routes/productos");
var authentication=require("./routes/authentication");
//var User   = require('./app/models/user'); // get our mongoose model

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3000; // used to create, sign, and verify tokens
//mongoose.connect(config.database); // connect to database


var app = express();
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));




//aquí metemos el middleware de autorizacion

//indicamos a la aplicacion las rutas que tiene que utilizar
app.use("/api/authenticate",authentication);
app.use("/api/productos",productos);



app.listen(port,function(){
    console.log("Escuchando en el puerto 3000");

});
console.log("una prueba");
