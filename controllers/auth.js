const express = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

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

     //Generar token
      const token = await generarJWT(usuario.id,  usuario.name);

    return res.status(201).json({
      ok: true,
     uid: usuario.id,
     name: usuario.name,
     token
    });
  
   } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el admin",
    });
  }
};
////////////////////////////////////////////////////////////
const login = async(req, res = express.response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    } 

    //Confirmar contraseña

    const validPassword = bcrypt.compareSync(password, usuario.password);
    
    if(!validPassword){
      return res.status(400).json({
        ok: false,
        msg: "Contraseña incorrecta",
      });
    }
    //Generar token
    const token = await generarJWT(usuario.id,  usuario.name);
    
    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });



    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el admin",
    });
    
  }
  
 
};

const renewToken = async (req, res = express.response) => {
 
  const {uid, name} = req;
  

  //generar token
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
   
    token
  });
};

module.exports = {
  crearUsuario: crearUsuario,
  login: login,
  renewToken: renewToken,
};
