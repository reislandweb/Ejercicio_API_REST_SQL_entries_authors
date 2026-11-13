const { body, query } = require('express-validator');

const validateGetEntries = [
    query('email')
        .exists()
        .trim()
        .isEmail()
        .withMessage('El formato del correo electronico no es valido')
        .normalizeEmail(),
]
const validatePutEntries = [
    body("title")
    .optional()
    .isString()
    .withMessage("El título debe ser un texto."),
  body("content")
    .optional()
    .isString()
    .withMessage("Contenido debe ser un texto")
    .isLength({ min: 10 })
    .withMessage("El contenido debe tener al menos 10 caracteres."),
  body("category")
    .optional()
    .isString()
    .withMessage("Categoria debe ser un texto")
    .isLength({ min: 5 })
    .withMessage("Categoría al menos 5 caracteres"),
]
const validateDelEntries = [
  query('title')
    .notEmpty()
    .withMessage('Debes proporcionar un titulo valido parapoder borrar la entrada')
]

module.exports = {
    validateGetEntries,
    validatePutEntries,
    validateDelEntries
}