const express = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

const crearUsuario = async (req, res = express.response) => {
  /* console.log(req.body); */

  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

     usuario = new Usuario(req.body);
    
    //Encriptar contraseña 
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    
     await usuario.save();

    return res.status(201).json({
      ok: true,
     uid: usuario._id,
     name: usuario.name,
    });
  
   } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el admin",
    });
  }
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
