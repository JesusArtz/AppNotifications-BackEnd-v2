var express = require("express");
var mysql = require("mysql");
var app = express();
//const URL = "notificationsapp-backend.herokuapp.com"

app.use(express.json());

var conexion = mysql.createConnection({
    host: "host",
    user: "user",
    password: "password",
    database: "database"
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


