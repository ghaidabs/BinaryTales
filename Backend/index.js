import express from "express";
import { MongoBDURL,PORT } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response)=> {
    console.log(request);
    return response.status(111).send('welcome');
});
mongoose
    .connect(MongoBDURL)
    .then(() => {
        console.log('connected');
        app.listen(PORT, ()=> {
            console.log(`listening on : ${PORT} `);
        });

    })
    
    .catch((error) => {
        console.log(error);
    });


