const express = require('express');

const { validateGetEntries, validatePutEntries, validateDelEntries } = require('../validation/entries.validation.js');

const  runValidation  = require('../middleware/validation.middleware.js')

const constrollersEntry = require('../controllers/entries.controller.js');

const router = express.Router();

router.get('/', validateGetEntries, runValidation, constrollersEntry.getEntries);

router.put('/', validatePutEntries, runValidation, constrollersEntry.putTitle);

router.delete('/',validateDelEntries, runValidation, constrollersEntry.deleteTitle);

//Exportamos el modulo para que las rutas puedan funcionar
module.exports = router;