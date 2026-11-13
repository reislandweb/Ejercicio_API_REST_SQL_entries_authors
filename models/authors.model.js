const pool = require('../config/db_pgsql.js');
const queriesAuthor = require('../queries/authors.queries.js');

const getAllAuthor = async () => {
    let client,result;

    try {
        client = await pool.connect();
        result = await client.query(queriesAuthor.getAllAuthor)

    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result.rows;
};
// getAllAuthor().then(data => console.log(data))

const getByEmailAuthor = async (email) => {
    let client,result;

    try {
        client = await pool.connect();
        result = await client.query(queriesAuthor.getByEmailAuthor,[email])
    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result.rows;
}
//getByEmailAuthor("birja@thebridgeschool.es").then(data => console.log(data))

const postCreateAuthor = async (name, surname, email, image) => {
    let client,result;
    try {
        
        client = await pool.connect();
        result = await client.query(queriesAuthor.postCreateAuthor,[ name, surname, email, image ])
    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result.rows;
}

/* const newAuthor = {
    name: "Pepe33",
    surname: "El MiniPepe",
    email: "pepe33@thebridgeschool.es",
    image: "https://randomuser.me/api/portraits/thumb/women/233.jpg"
};
postCreateAuthor(newAuthor).then(data => console.log(data)) */
// name = $1, surname = $2, image = $3 WHERE email = $4
 const putUpdateAuthor = async (name, surname, image, email) => {
    let client,result
    try {
        client = await pool.connect();
        result = await client.query(queriesAuthor.putUpdateAuthor,[ name, surname, image, email]);
    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result.rows;
 }
/*  const updateAuthor = {
    name: "Murilo",
    surname: "El MiniPepe",
    email: "pepe33@thebridgeschool.es",
    image: "https://randomuser.me/api/portraits/thumb/women/233.jpg"
 }
 putUpdateAuthor(updateAuthor).then(data => console.log(data)); */

const delAuthor = async (email) => {
    let client,result;
    try{
        client = await pool.connect();
        result = await client.query(queriesAuthor.delAuthor,[email]);
    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result.rows;
}

const validationEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect();
        result = await client.query(queriesAuthor.validationEmail,[email]);
    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result.rowCount;
}
// delAuthor("Pepe").then(data => console.log(data));
const author = {
    getAllAuthor,
    getByEmailAuthor,
    postCreateAuthor,
    putUpdateAuthor,
    delAuthor,
    validationEmail
}
module.exports = author;