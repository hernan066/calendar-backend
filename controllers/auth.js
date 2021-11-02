const express = require("express");

const crearUsuario = (req, res = express.response) => {
  /* console.log(req.body); */

  const { email, password, name } = req.body;

  

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
