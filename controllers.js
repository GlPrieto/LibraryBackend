const { Autor, Obra } = require("./models.js");


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
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createAutor = (req, res) => {
    const autor = new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos });
    autor.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

// ------ OBRAS

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
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createObra = (req, res) => {
    const obra = new Articulo({ nombre: req.body.nombre, precio: req.body.precio });
    obra.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}