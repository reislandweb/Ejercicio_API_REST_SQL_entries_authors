const express = require('express');
const constrollersAuthor = require('../controllers/authors.controller.js');
const router = express.Router();


router.get('/', constrollersAuthor.getAuthor);
router.post('/', constrollersAuthor.postCreateAuthor);
router.put('/', constrollersAuthor.putUpdateAuthor);
router.delete('/', constrollersAuthor.delAuthor);

module.exports = router;