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
        const authorExists = await author.validationEmail(email);
        if(authorExists === 1) {
           return res.status(400).json({
                message: `Email: ${email}, ya existe en la BBDD`
            })
        } else {
            let result = await author.postCreateAuthor(name, surname, email, image);
            res.status(201).json({message:`usuario creado: ${email}`})
            return result;
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const putUpdateAuthor = async (req, res) => {
    let { name, surname, image, email } = req.body;

    try {
        const authorExists = await author.validationEmail(email);
        if(authorExists === 1) {
           return res.status(400).json({
                message: `Email: ${email}, ya existe en la BBDD`
            })
        } else if (!email) {
            return res.status(400).json({message: `Error faltan el EMAIL para poder actualizar la BBDD`})
        } else {
            let result = await author.putUpdateAuthor(name, surname, image, email);
            res.status(200).json({message: `Usuario con email: ${email}, actulizado correctamente.`})
            return result;
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const delAuthor = async (req, res) => {
    const { email } = req.query;
    try {
        const authorExists = await author.validationEmail(email);
        if(authorExists === 0) {
           return res.status(400).json({
                message: `No existe email en BBDD para borrar`
            })
        } else if (!email) {
            return res.status(400).json({message: `Introduce email para poder borrarlo de la BBDD`})
        } else {
            let result = await author.delAuthor(email);
            res.status(200).json({message: `${email} borrado correctamente de la BBDD`});
            return result
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