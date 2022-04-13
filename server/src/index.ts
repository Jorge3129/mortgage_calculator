import bankRouter from "./routes/bank.router";
import authRouter from "./routes/auth.router";
import cors from 'cors'
import express, {Request, Response} from "express";
import {setupDB} from "./controllers/db.controller";

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.use('/banks', bankRouter);
app.use('/auth', authRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("HI!!!");
});

(async () => {
    await setupDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})();
