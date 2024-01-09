import sqlite3 from 'sqlite3';

function initDB(){
const db = new sqlite3.Database('./db.sqlite', (err) => {if (err) console.log(err)});

const sql = `CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT , body TEXT)`
db.run(sql, (err) => {if (err) console.log(err)});
}

export default initDB;