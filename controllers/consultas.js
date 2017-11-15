var axios=require("axios");
var config = require("../config");

exports.consultaPrincipales=function(req,res){
    var url=config.elpais + "?n=resumen"
    axios.get(url).then(response=>{
        console.log(response.data);

        res.send(response.data.replace("premios=",""));
    }).catch(error=>{
        console.log(error);
        res.status(500).send(error);
    });
}

exports.consultaNumero=function(req,res){
    var url=config.elpais + "?n=" + req.params.numero;
    axios.get(url).then(response=>{
        console.log(response.data);
        res.send(response.data.replace("busqueda=",""));
    }).catch(error=>{
        console.log(error);
        res.status(500).send(error);
    });
    
}

