import {Router, query} from "express";
import mongoose from "mongoose";
import { bookModel } from "../models/book.js";

const router = Router();

router.get("/:key",async (req, res)=>{
    let result = await bookModel.find({
        "$or" : [
            {
                Book_title: { $regex: req.params.key }
            },
            {
                Category: { $regex: req.params.key }
            },
            {
                Description: { $regex: req.params.key }
            }
        ]
    });
    res.send(result);
});
export default router ;