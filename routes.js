const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/autores",      cors(), controller.readAutores);   // Read All
router.get    ("/autores/:id",  cors(), controller.readAutor);    // Read
router.delete ("/autores/:id",  cors(), controller.deleteAutor);  // Delete
router.put    ("/autores/:id",  cors(), controller.updateAutor);  // Update
router.post   ("/autores",      cors(), controller.createAutor);  // Create

router.get    ("/obras",     cors(), controller.readObras);  // Read All
router.get    ("/obras/:id", cors(), controller.readObra);   // Read
router.delete ("/obras/:id", cors(), controller.deleteObra); // Delete
router.put    ("/obras/:id", cors(), controller.updateObra); // Update
router.post   ("/obras",     cors(), controller.createObra); // Create


module.exports = router;