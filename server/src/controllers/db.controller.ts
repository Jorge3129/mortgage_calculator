import {db} from "../config/db"

const createUserQuery = `CREATE TABLE IF NOT EXISTS
    Users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50)
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

const createMortgageQuery = `CREATE TABLE IF NOT EXISTS
    Mortgage (
    mgId INT PRIMARY KEY AUTO_INCREMENT,
    initLoan INT,
    downPayment INT,
    bankId INT,
    FOREIGN KEY (bankId) REFERENCES Banks(bankId)
    )`

const createTableQueries = [createUserQuery, createBankQuery, createMortgageQuery];

class DbController {
    static async connectToDB() {
        await db.connect((err) => {
            if (err) return console.log(err);
            console.log('Connected to the MySQL server.');
        });
    }

    static async runQuery(queryString: string, message?: string) {
        await db.query(queryString, (err) => {
            if (err) return console.log(err);
            if (!message) return;
            console.log('Success: ' + message);
        });
    }

    static async setup() {
        await DbController.connectToDB();
        createTableQueries.map(async (query) => await DbController.runQuery(query))
    }

}

export default DbController;
