const { Autor, Obra } = require("./models.js");

//Autors
exports.listAutores = (req, res) => {
    Autor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readAutor = (req, res) => {
    Autor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteAutor = (req, res) => {
    Autor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateAutor = (req, res) => {
    Autor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { autorID: req.body.autorID, nombre: req.body.nombre, apellidos: req.body.apellidos, epoca: req.body.epoca } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createAutor = (req, res) => {
    const autor = new Cliente({ autorID: req.body.autorID, nombre: req.body.nombre, apellidos: req.body.apellidos, epoca: req.body.epoca });
    autor.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

//OBRAS

exports.readObras = (req, res) => {
    Obra.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readObra = (req, res) => {
    Obra.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteObra = (req, res) => {
    Obra.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateObra = (req, res) => {
    Obra.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { obraId: req.body.obraId, nombre: req.body.nombre, fechaPublicacion: req.body.fechaPublicacion, genero: req.body.genero } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createObra = (req, res) => {
    const obra = new Obra({ obraId: req.body.obraId, nombre: req.body.nombre, fechaPublicacion: req.body.fechaPublicacion, genero: req.body.genero });
    obra.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}