import express, {Request, Response} from "express";
import {connection, db, query} from "../config/connection";
import {AuthUser} from "../types/types";

const bcrypt = require("bcrypt");

const getUserById = `
    SELECT *
    FROM Users
    WHERE first_name = ?
    AND last_name = ?
`

const getUserByEmail = `
    SELECT *
    FROM Users
    WHERE email = ?
`

const getUserByName = `
    SELECT *
    FROM Users
    WHERE userId = ?
`

const postUserQuery = `
    INSERT INTO Users(first_name, last_name, password, email)
    VALUES (?,?,?,?)
`

class AuthController {

    static async findUser({first_name, last_name}: AuthUser): Promise<AuthUser[] | null> {
        try {
            return await query(getUserByName, [first_name, last_name]);
        } catch (e: any) {
            return null
        }
    }

    static async findUserByEmail({email}: AuthUser): Promise<AuthUser[] | null> {
        try {
            return await query(getUserByEmail, [email]);
        } catch (e: any) {
            return null
        }
    }

    static async register(req: Request, res: Response) {
        try {
            const {first_name, last_name, password, email} = req.body;

            const users = await AuthController.findUserByEmail(req.body);
            if (!users) return res.status(502).json({message: "Server error"});
            if (users.length > 0) return res.status(403).json({message: "Email already exists"});

            const hashedPassword = await bcrypt.hash(password, 7);
            const result = await query(postUserQuery, [first_name, last_name, hashedPassword, email])

            res.json({result, success: true});
        } catch (e: any) {
            res.status(502).json({error: e});
        }
    }

    static async login(req: Request, res: Response) {
        const {password} = req.body;
        console.log(req.body);

        const users = await AuthController.findUserByEmail(req.body);
        if (!users) return res.status(502).json({message: "Server error"});

        const user = users[0];

        if (!user) return res.status(403).json({message: "Email not found"});

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(403).json({message: "Incorrect password"});

        const partUser = {...user, password: undefined}
        res.json({success: true, user: partUser});

        // const user: IUser | undefined = users
        //     .find(u => u.username === username
        //         && u.password === password);
        // if (user) res.json({success: true, username});
        // else res.status(403).json({success: false});
    }
}

export default AuthController
