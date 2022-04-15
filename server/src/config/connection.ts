import mysql from "mysql";

const {makeDb} = require('mysql-async-simple');

export const connection = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: ""
});

export const db = makeDb()

export const query = (queryString: string, data?: any[]) => {
    return db.query(connection, queryString, data);
}
