const express = require("express");
require("dotenv").config();

//crear el servidor express
const app = express();


//Directorio publico
app.use(express.static('public'));




//Rutas
//todo: auth / crear usuario / login / renew
//todo: crud: eventos
app.use('/api/auth', require('./routes/auth'));





//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
