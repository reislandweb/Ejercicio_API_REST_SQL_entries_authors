const express = require('express');
const constrollersEntry = require('../controllers/entries.controller.js');
const router = express.Router();

router.get('/', constrollersEntry.getEntries);
router.put('/', constrollersEntry.putTitle);
router.delete('/', constrollersEntry.deleteTitle);

//Exportamos el modulo para que las rutas puedan funcionar
module.exports = router;