var express = require("express");
var mysql = require("mysql");
var app = express();
//const URL = "notificationsapp-backend.herokuapp.com"

app.use(express.json());

var conexion = mysql.createConnection({
    host: "162.241.62.48",
    user: "jesusar1_apitest",
    password: "Gatito2005",
    database: "jesusar1_backend"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Funcionando <3")
    }

});

app.get("/api/datos", (req, res) => {
    conexion.query(
        "SELECT * FROM Datos",
        (error, resultado) => {
            if(error){
                throw error;
            }else{
                res.send(resultado);
            }
        }
    )
});

app.set('port', process.env.PORT || 8080)

app.listen(app.set('port'), () => {
    console.log("online");
    console.log(process.env.PORT)
  });


