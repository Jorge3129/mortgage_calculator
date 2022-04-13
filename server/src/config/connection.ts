import mysql from "mysql";

const {makeDb} = require('mysql-async-simple');

const str = "mysql://b2a97ee71cc71d:986704fb@us-cdbr-east-05.cleardb.net/heroku_70af43626dcdf0f?reconnect=true";

// export const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB,
//     database: 'mortgage'
// });

export const connection = mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b2a97ee71cc71d",
    password: "986704fb",
    database: "heroku_70af43626dcdf0f"
});

export const db = makeDb()

export const query = (queryString: string, data?: any[]) => {
    return db.query(connection, queryString, data);
}
