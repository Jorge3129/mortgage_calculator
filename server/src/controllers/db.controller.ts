import {connection, db} from "../config/connection";

const createUserQuery = `CREATE TABLE IF NOT EXISTS
    Users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(200),
    email VARCHAR(50)
    )`

const createBankQuery = `CREATE TABLE IF NOT EXISTS
    Banks (
    bankId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    interestRate INT,
    maxLoan INT,
    minDownPayment INT,
    loanTerm INT,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(userId)
    )`

export const setupDB = async () => {
    try {
        await db.connect(connection);
        console.log("Connected!!")
        await db.query(connection, createUserQuery);
        await db.query(connection, createBankQuery);
    } catch (e) {
        console.log(e)
    }
}
