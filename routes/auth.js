//Rutas de usuarios /Auth
// host + /api/auth


const express = require("express");
const { check } = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");
const { crearUsuario, login, renewToken } = require("../controllers/auth");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = express.Router();





router.post(
    "/new", 
    [   //middlewares
        check ( 'name', 'El nombre es obligatorio').not().isEmpty(),
        check ( 'email', 'El email es obligatorio').isEmail(),
        check ( 'password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
         validarCampos 
    ],
    crearUsuario );

router.post(
    "/",
    [
        check ( 'email', 'El email es obligatorio').isEmail(),
        check ( 'password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
         validarCampos 
    ],
     login);

router.get("/renew", validarJWT, renewToken);


module.exports = router;