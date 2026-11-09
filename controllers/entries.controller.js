let entry = require('../models/entries.model.js');

const getEntries = async (req, res) => {
    let entries;
    try {
        if(req.query.email) {
            entries = await entry.getEntriesByEmail(req.query.email)
        } else {
            entries = await entry.getAllEntries();
        }
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}
const putTitle = async (req, res) => {

    let { content, category, title } = req.body;

    try {
        if(!content || !category || !title) {
            return res.status(400).json({message: `Error faltan uno de los datos`})
        } else {
            await entry.putTitle(content, category, title);
            res.status(200).json({message: `Se ha modificado la entry ${title}`})
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}
const deleteTitle = async (req, res) => {
    let { title } = req.body;
    try {
        if(!title) {
            return res.status(400).json({message: `Error al borrar`})
        } else {
            await entry.deleteTitle(title)
            res.status(200).json({message: `Se ha borrado la entry ${title}`})
        }
    } catch (err) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}
// Exportamos los controladores que vamos a usar en ENTRIES.ROUTES.JS
module.exports = {
    getEntries,
    putTitle,
    deleteTitle
}