const {Router} = require("express");
const {validarJWT} = require("../middlewares/validar-jwt");
const {getEvento, crearEvento, actualizarEvento, eliminarEvento} = require("../controllers/events");

const router = Router();

//Pasar por validaciones
router.use( validarJWT );

//Obtener eventos
router.get('/',  getEvento);

//crear eventos
router.post('/',  crearEvento);

//acutalizar eventos
router.put('/:id',  actualizarEvento);

//borrar eventos
router.delete('/:id',  eliminarEvento);

module.exports = router;