const express = require("express");

//crear el servidor express
const app = express();

//Rutas
app.get("/", (req, res) => {
  console.log("se requiere /");
  res.json({
    ok: true,
    mensaje: "Peticion realizada correctamente",
  });
});

//Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
