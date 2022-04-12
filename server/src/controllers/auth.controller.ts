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

    static async register(req: Request, res: Response) {
        try {
            const {first_name, last_name, password, email} = req.body;

            const users = await AuthController.findUser(req.body);
            if (!users) return res.status(502).json({message: "Server error"});
            if (users.length > 0) return res.status(403).json({message: "User already exists"});

            const hashedPassword = await bcrypt.hash(password, 7);
            const result = await query(postUserQuery, [first_name, last_name, hashedPassword, email])

            res.json(result);
        } catch (e: any) {
            res.status(502).json({error: e});
        }
    }

    static async login(req: Request, res: Response) {
        const {password} = req.body;

        const users = await AuthController.findUser(req.body);
        if (!users) return res.status(502).json({message: "Server error"});

        if (!users[0]) return res.status(403).json({message: "User not found"});

        const valid = await bcrypt.compare(password, users[0].password);
        if (!valid) return res.status(403).json({message: "Incorrect password"});

        // const user: IUser | undefined = users
        //     .find(u => u.username === username
        //         && u.password === password);
        // if (user) res.json({success: true, username});
        // else res.status(403).json({success: false});
    }
}

module.exports = AuthController
