import {Router, query} from "express";
import mongoose from "mongoose";
import { bookModel } from "../models/book.js";

const router = Router();

router.get("/:key", async (req, res) => {
    try {
        const searchKey = req.params.key;
        const regex = new RegExp(searchKey, "i");
        const result = await bookModel.find({
            $or: [
                { Book_title: { $regex: regex } },
                { Category: { $regex: regex } },
                { Description: { $regex: regex } }
            ]
        }).limit(10);

        res.send(result);
    } catch (err) {
        res.status(500).send({ error: "Internal server error" });
    }
});

export default router ;