import mysql from "mysql";

const {makeDb} = require('mysql-async-simple');

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB,
    database: 'mortgage'
});

export const db = makeDb()

export const query = (queryString: string, data?: any[]) => {
    return db.query(connection, queryString, data);
}
