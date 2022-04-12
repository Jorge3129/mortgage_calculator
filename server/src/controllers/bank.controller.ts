import {Request, Response} from "express";
import {connection, db, query} from "../config/connection";

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
        try {
            const {userId} = req.params;
            const result = await query(getBanksQuery, [userId]);
            res.json(result);
        } catch (e) {
            res.status(404).json({error: e});
        }
    }

    static async postBank(req: Request, res: Response) {
        try {
            const {name, interestRate, maxLoan, minDownPayment, loanTerm, userId} = req.body;
            const result = query(postBankQuery,
                [name, interestRate, maxLoan, minDownPayment, loanTerm, userId])
            res.json(result);
        } catch (e) {
            res.status(404).json({error: e});
        }
    }

    static async updateBank(req: Request, res: Response) {

    }

    static async deleteBank(req: Request, res: Response) {
        try {
            const {bankId} = req.params;
            const result = query(deleteBankQuery, [bankId])
            res.json(result);
        } catch (e) {
            res.status(404).json({error: e});
        }
    }
}

export default BankController;
