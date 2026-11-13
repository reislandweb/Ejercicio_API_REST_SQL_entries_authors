const { body, query } = require('express-validator');

const validationGetAuthor = [
    query('email')
        .exists()
        .trim()
        .isEmail()
        .withMessage('El formato del correo electronico no es valido')
        .normalizeEmail(),
];
const validationPostCreateAuthor = [
    body("name")
    .exists()
    .withMessage("Es obligatio indicar el nombre de la entrada")
    .isString()
    .withMessage("El nombre debe ser una cadena de texto."),
  body("surname")
    .exists()
    .withMessage("El apellido es obligatorio.")
    .isString()
    .withMessage("El apellido debe ser una cadena de caracteres.")
    .isLength({ min: 5 })
    .withMessage("El apellido debe tener al menos 5 caracteres."),
  body("email")
    .isEmail()
    .withMessage("Proporciona un correo electrónico válido"),
  body("image")
    .exists()
    .withMessage("Se requiere una imagen.")
    .isString()
    .withMessage('El campo debe ser texto')
    .isURL({require_protocol: false}) // Urls sin https
    .withMessage("Debes introducir una URL valido"),
];
const validationPutUpdateAuthor = [
    body("name")
    .optional()
    .isString()
    .withMessage("El nombre debe ser una cadena de texto."),
  body("surname")
    .optional()
    .isString()
    .withMessage("El apellido debe ser una cadena de caracteres.")
    .isLength({ min: 5 })
    .withMessage("El apellido debe tener al menos 5 caracteres."),
  body("email")
    .exists()
    .trim()
    .isEmail()
    .withMessage("Proporciona un correo electrónico válido"),
  body("image")
    .optional()
    .isString()
    .withMessage('El campo debe ser texto')
    .isURL({require_protocol: false}) // Urls sin https
    .withMessage("Debes introducir una URL valido"),
];
const validationDelAuthor = [
    query('email')
    .exists()
    .trim()
    .isEmail()
    .notEmpty()
    .withMessage('Debes proporcionar un titulo valido para poder borrar la entrada')
];

module.exports = {
    validationGetAuthor,
    validationPostCreateAuthor,
    validationPutUpdateAuthor,
    validationDelAuthor
}