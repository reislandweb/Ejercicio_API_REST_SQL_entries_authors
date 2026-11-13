const express = require('express');
const helmet = require("helmet");

const app = express();
const port = 3000;

// require('dotenv').config();

// Securizar la API con helmet
app.use(helmet());

const error404 = require("./middleware/error404.js");
const morgan = require("./middleware/morgan.js");

app.use(morgan('[:date[iso]] :method :clean-url :status - :body'));

const entriesRouter = require('./routes/entries.routes.js');
const authorRouter = require('./routes/authors.routes.js');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hola People');
})

app.use('/api/entries', entriesRouter);
app.use('/api/author', authorRouter)
app.use(error404);
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
