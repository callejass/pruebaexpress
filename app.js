
var express     = require('express');

var bodyParser  = require('body-parser');
var morgan      = require('morgan');






var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var cors = require('cors');


//la conexion a la base de datos
var mongoose = require('mongoose');
mongoose.connect(config.database);



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
//habilitar cors
app.use(cors());
// use morgan to log requests to the console
app.use(morgan('dev'));




//aquí metemos el middleware de autorizacion

//indicamos a la aplicacion las rutas que tiene que utilizar
//las rutas de nuestra api
//var productos=require("./routes/productos");
var usuarios=require("./routes/usuarios");
app.use("/api/usuarios",usuarios);

var jugadas=require("./routes/jugadas");
app.use("/api/jugadas",jugadas);

var autenticacion=require("./routes/autenticacion");
app.use("/api/autenticar",autenticacion);

var consultas=require("./routes/consultas");
app.use("/api/consultas",consultas);

app.listen(port,function(){
    console.log("Escuchando en el puerto 3000");

});
console.log("una prueba");
