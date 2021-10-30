const express = require("express");
require("dotenv").config();

//crear el servidor express
const app = express();


//Directorio publico
app.use(express.static('public'));




//Rutas
app.get("/", (req, res) => {
  console.log("se requiere /");
  res.json({
    ok: true,
    mensaje: "Peticion realizada correctamente",
  });
});

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
