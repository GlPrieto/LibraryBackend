const mongoose = require ('mongoose');

const Autor = mongoose.model('Autor', 
  { autorID: Number, nombre: String, apellidos: String, epoca: String}
);

const Obra = mongoose.model('Obra',
    new mongoose.Schema({ obraID: Number, nombre: String, fechaPublicacion: Number, genero: String})
);

module.exports = {
  Autor: Autor,
  Obra: Obra
}

//library.autor
