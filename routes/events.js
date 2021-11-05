const {Router} = require("express");
const {validarJWT} = require("../middlewares/validar-jwt");
const {getEvento, crearEvento, actualizarEvento, eliminarEvento} = require("../controllers/events");
const { check } = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");
const {isDate} = require("../helpers/isDate");

const router = Router();

//Pasar por validaciones
router.use( validarJWT );

//Obtener eventos
router.get('/',  getEvento);

//crear eventos
router.post(
    '/',  
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        //check('end', 'La fecha fin es obligatoria').custom(),
        validarCampos
    ],
    crearEvento);

//acutalizar eventos
router.put('/:id',  actualizarEvento);

//borrar eventos
router.delete('/:id',  eliminarEvento);

module.exports = router;