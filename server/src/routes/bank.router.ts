import express from "express";
const router = express.Router();
import bankController from "../controllers/bank.controller";

router.get('/:userId', bankController.getBanks);
router.post('/', bankController.postBank);
router.patch('/');
router.delete('/:bankId', bankController.deleteBank);

export default router;
