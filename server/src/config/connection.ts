import mysql from "mysql";

const {makeDb} = require('mysql-async-simple');

const str = "";

// export const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB,
//     database: 'mortgage'
// });

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
