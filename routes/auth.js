//Rutas de usuarios /Auth
// host + /api/auth


const express = require("express");
const router = express.Router();

const { crearUsuario, login, renewToken } = require("../controllers/auth");




router.post("/new", crearUsuario );

router.post("/", login);

router.get("/renew", renewToken);


module.exports = router;