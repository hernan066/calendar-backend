const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {dbConecction} = require("./database/config");

//crear el servidor express
const app = express();

//base de datos
/* dbConnection(); */
dbConecction();

//cors
app.use(cors());


//Directorio publico
app.use(express.static('public'));


//lectura y parseo del body
app.use(express.json());


//Rutas
//todo: auth / crear usuario / login / renew
//todo: crud: eventos
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));





//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
