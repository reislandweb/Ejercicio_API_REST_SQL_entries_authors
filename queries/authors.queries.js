const queriesAuthor = {
    getAllAuthor: `SELECT * FROM authors`,
    getByEmailAuthor: `SELECT * FROM authors WHERE email =$1`,
    postCreateAuthor: `INSERT INTO authors(name, surname, email, image) VALUES ($1, $2, $3, $4)`,
    putUpdateAuthor: `UPDATE authors SET name = $1, surname = $2, image = $3 WHERE email = $4`,
    delAuthor: `DELETE FROM authors WHERE email = $1;`
}

module.exports = queriesAuthor;