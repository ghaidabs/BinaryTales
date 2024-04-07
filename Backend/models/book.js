import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    Book_title : {
        type : String,
        required: true,
    },
    Type :{
        type : String,
        required: true,
    },
    Number_Of_Pages :{
        type : Number,
        required: true,
    },
    Price :{
        type : Number,
        required: true,
    },
    Category :{
        type : String,
        required: true,
    },
    Description :{
        type : String,
        required: true,
    },
    imageURL :{
        type : String,
        required: true,
    },


});
export const bookModel = mongoose.model("book",bookSchema);