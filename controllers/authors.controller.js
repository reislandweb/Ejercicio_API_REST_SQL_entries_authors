let author = require('../models/authors.model.js');

const getAuthor = async (req, res) => {
    let data;
    try {
        if (req.query.email) {
            data = await author.getByEmailAuthor(req.query.email)
        } else {
            data = await author.getAllAuthor()
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};

const postCreateAuthor = async (req, res) => {
    let { name, surname, email, image } = req.body;
    try {
        if (!name || !surname || !email || !image) {
            return res.status(400).json({message: `Error faltan uno de los datos`})
        } else {
            await author.postCreateAuthor(name, surname, email, image);
            res.status(201).json({message:`usuario creado: ${email}`})
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const putUpdateAuthor = async (req, res) => {
    let { name, surname, image, email } = req.body;

    try {
        if (!email) {
            return res.status(400).json({message: `Error faltan el EMAIL para poder actualizar la BBDD`})
        } else {
            await author.putUpdateAuthor(name, surname, image, email);
            res.status(200).json({message: `Usuario con email: ${email}, actulizado correctamente.`})
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const delAuthor = async (req, res) => {
    
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({message: `Introduce name para poder borrarlo de la BBDD`})
        } else {
            await author.delAuthor(email);
            res.status(200).json({message: `${email} borrado correctamente de la BBDD`});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

module.exports = {
    getAuthor,
    postCreateAuthor,
    putUpdateAuthor,
    delAuthor
}