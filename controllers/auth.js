const express = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = express.response) => {
  /* console.log(req.body); */

  const { email, password, name } = req.body;

  //Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  return res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const login = (req, res = express.response) => {
  const { email, password } = req.body;
  
   //Manejo de errores
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({
       ok: false,
       errors: errors.mapped(),
     });
   }
  
  return res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const renewToken = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario: crearUsuario,
  login: login,
  renewToken: renewToken,
};
