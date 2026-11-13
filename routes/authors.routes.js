const express = require('express');
const constrollersAuthor = require('../controllers/authors.controller.js');
const router = express.Router();

const { validationGetAuthor, validationPostCreateAuthor, validationPutUpdateAuthor, validationDelAuthor } = require('../validation/author.validation.js');

const  runValidation  = require('../middleware/validation.middleware.js')



router.get('/', validationGetAuthor, runValidation, constrollersAuthor.getAuthor);
router.post('/', validationPostCreateAuthor, runValidation, constrollersAuthor.postCreateAuthor);
router.put('/', validationPutUpdateAuthor, runValidation, constrollersAuthor.putUpdateAuthor);
router.delete('/', validationDelAuthor, runValidation, constrollersAuthor.delAuthor);

module.exports = router;