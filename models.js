const mongoose = require ('mongoose');

const Autor = mongoose.model('Autor', 
  { nombre: String, apellidos: String }
);

const Obra = mongoose.model('Obra',
    new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Autor: Autor,
  Obra: Obra
}

// module.exports = {
//     Cliente,
//     Articulo
// }
//library.autor
