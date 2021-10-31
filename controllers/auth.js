const express = require("express");



const crearUsuario = (req, res = express.response) => {
    res.json({
      ok: true,
      msg: 'register'
    });
  }

 const login = (req, res = express.response) => {
    res.json({
      ok: true,
      msg: 'login'
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
