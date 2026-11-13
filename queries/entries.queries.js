const queries = {
    getEntriesByEmail:`SELECT 
    entries.title, 
    entries.content, 
    entries.date, 
    entries.category, 
    authors.name, 
    authors.surname, 
    authors.email 
    AS 
    email_author, 
    authors.image 
    FROM entries 
    JOIN authors ON entries.id_author = authors.id_author WHERE authors.email = $1;`,

    getAllEntries: `SELECT entries.title, entries.content, entries.date, entries.category, authors.name, authors.surname, authors.email AS email_author, authors.image FROM entries JOIN authors ON entries.id_author = authors.id_author;`,

    putTitle:`UPDATE entries SET content = $1, category = $2 WHERE title = $3`,

    deleteTitle:`DELETE FROM entries WHERE title = $1;`,

    titleValidation: `SELECT * FROM entries WHERE title = $1`
};

module.exports = queries;

//email validation