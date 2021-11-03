const {response} = require("express");


const getEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEventos'
      });
}
const crearEvento = (req, res = response) => {
    
  console.log(req.body);
  
  res.json({
        ok: true,
        msg: 'crearEvento'
      });
}
const actualizarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento'
      });
}
const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento'
      });
}

module.exports = {
    getEvento: getEvento,
    crearEvento: crearEvento,
    actualizarEvento: actualizarEvento,
    eliminarEvento: eliminarEvento
  };