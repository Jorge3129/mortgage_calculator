import 'dotenv/config'
import DB from "./controllers/db.controller"
import bankRouter from "./routes/bank.router";
import userRouter from "./routes/user.router";
import cors from 'cors'
import express, {Request, Response} from "express";

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use(cors({
    origin: "*"
}))
app.use('/banks', bankRouter);
app.use('/user', userRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("HI!!!");
});

(async () => {
    await DB.setup();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})();
