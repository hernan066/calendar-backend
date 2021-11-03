const express = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = express.response) => {
  /* console.log(req.body); */

  // const { email, password, name } = req.body;

  try {
    const usuario = new Usuario(req.body);

    await usuario.save();

    return res.status(201).json({
      ok: true,
      msg: "register",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el admin",
  })};
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
