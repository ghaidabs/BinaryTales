import {Router} from "express";
import mongoose from "mongoose";
import { bookModel } from "../models/book.js";

const router = Router();
router.get("/",async (req, res)=>{
    try {
        const response =await bookModel.find({});
        res.json(response);
    }catch(err){
        res.json(err);
    }
});
router.post("/",async (req, res)=>{
    const book = new bookModel(req.body);
    try {
        const response =await book.save();
        res.json(response);
    }catch(err){
        res.json(err);
    }
});
router.get('/:id', async (req, res)=>{
    try {
        const { id } =req.params;
        const response = await bookModel.findById(id);
        if (!response) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err);
    }
});

export default router ;