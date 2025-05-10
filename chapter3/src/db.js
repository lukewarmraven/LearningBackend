import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')

db.exec(`
    CREATE TABLE user (
    id INTEGER,
    username TEXT UNIQUE AUTOINCREMENT,
    password TEXT
    )
`)

db.exec(`
    CREATE TABLE todos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN, 
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
`)

export default db