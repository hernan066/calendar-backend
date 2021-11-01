//Rutas de usuarios /Auth
// host + /api/auth


const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const { crearUsuario, login, renewToken } = require("../controllers/auth");




router.post(
    "/new", 
    [
        check ( 'name', 'El nombre es obligatorio').not().isEmpty(),
        check ( 'email', 'El email es obligatorio').isEmail(),
        check ( 'password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
    ],
    crearUsuario );

router.post(
    "/",
    [
        check ( 'email', 'El email es obligatorio').isEmail(),
        check ( 'password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
    ],
     login);

router.get("/renew", renewToken);


module.exports = router;