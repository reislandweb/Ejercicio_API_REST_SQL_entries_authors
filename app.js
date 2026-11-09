const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// require('dotenv').config();

const entriesRouter = require('./routes/entries.routes.js');
const authorRouter = require('./routes/authors.routes.js');

app.get('/', (req, res) => {
    res.send('Hola People');
})

app.use('/api/entries', entriesRouter);
app.use('/api/author', authorRouter)

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
