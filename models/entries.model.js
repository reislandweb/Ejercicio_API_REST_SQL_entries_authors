const pool = require('../config/db_pgsql.js');
const queries = require('../queries/entries.queries.js');

const getEntriesByEmail = async (email)  => {
    let client, result1;

    try {
        client = await pool.connect();
        result1 = await client.query(queries.getEntriesByEmail,[email])

    } catch (err){
        console.log(err)
        throw err;
    } finally {
        client.release()
    }
    return result1.rows;
}
// getEntriesByEmail("birja@thebridgeschool.es").then(data => console.log(data));

const getAllEntries = async () => {
    let client, result2;
    
    try {
        client = await pool.connect();
        result2 = await client.query(queries.getAllEntries)

    } catch (err) {
        console.log(err)
        throw err;
    } finally {
        client.release();
    }
    return result2.rows;
}   
// getAllEntries().then(data => console.log(data));

const putTitle =  async (content, category, title) => {
    let client,result3;

    try {
        client =  await pool.connect();
        result3 =  await client.query(queries.putTitle,[content, category, title])
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result3.rows;
}
//  putTitle("Contenido nuevo", "Sucesos", "Noticia: Un panda suelto por la ciudad").then(data => console.log(data));

const deleteTitle = async (title) => {
    let client,result4;

    try {
        client = await pool.connect();
        result4 = await client.query(queries.deleteTitle,[title])
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result4.rows;
}
// deleteTitle("Amanece Madrid lleno de arena").then(data => console.log(data));

const entries = {
    getEntriesByEmail,
    getAllEntries,
    putTitle,
    deleteTitle
}

module.exports = entries;