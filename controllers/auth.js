const express = require("express");



const crearUsuario = (req, res = express.response) => {
    
  console.log(req.body);

  const { email, password, name } = req.body;
  
  
  //Solo se puede devolver una respuesta
  
  if(name.length < 5){
    return res.status(400).json({
      ok: false,
      msg: 'El nombre debe tener al menos 5 caracteres'
    });
  
  
  return res.json({
      ok: true,
      msg: 'register',
      name,
      email,
      password
    });
  }

 const login = (req, res = express.response) => {
    
  const { email, password } = req.body;
  res.json({
      ok: true,
      msg: 'login',
      email,
      password
    });
  }

  const renewToken = (req, res = express.response) => {
    res.json({
      ok: true,
      msg: 'renew'
    });
  }

  module.exports = {
    crearUsuario: crearUsuario,
    login: login,
    renewToken: renewToken

    }
