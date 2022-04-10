import {db} from "../config/db"
import {Request, Response} from "express";

const getBanksQuery = `
    SELECT *
    FROM Banks
    WHERE userId = ?
`
const postBankQuery = `
    INSERT INTO Banks(name, interestRate, maxLoan, minDownPayment, loanTerm, userId)
    VALUES (?,?,?,?,?,?)
`

const deleteBankQuery = `
    DELETE FROM Banks
    WHERE bankId = ?
`

class BankController {

    static async getBanks(req: Request, res: Response) {
        const {userId} = req.params;
        await db.query(
            getBanksQuery, [userId],
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(404).json({error: true});
                }
                console.log(result);
                res.json(result)
            })
    }

    static async postBank(req: Request, res: Response) {
        console.log('/banks POST Request');
        const {name, interestRate, maxLoan, minDownPayment, loanTerm, userId} = req.body;
        await db.query(
            postBankQuery, [name, interestRate, maxLoan, minDownPayment, loanTerm, userId],
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(404).json({error: true});
                }
                console.log(result);
                res.json(result)
            })
    }

    static async updateBank(req: Request, res: Response) {

    }

    static async deleteBank(req: Request, res: Response) {
        const {bankId} = req.params;
        await db.query(
            deleteBankQuery, [bankId],
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(404).json({error: true});
                }
                res.json(result)
            })
    }
}

export default BankController;
