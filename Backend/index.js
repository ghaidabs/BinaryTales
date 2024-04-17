import express from "express";
import { MongoBDURL,PORT } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";

import loginRoutes from './routes/login.js';
import signupRoutes from './routes/signup.js';
import bookRoutes from './routes/book.js';
import searchRoutes from './routes/search.js';

const app = express();
//middleware
app.use(express.json());
app.use(cors());


//routes
app.use('/api/login',loginRoutes);
app.use('/api/signup',signupRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/search',searchRoutes);



app.get('/', (request, response)=> {
    response.send('hello');
    console.log(request);
    return response.status(200).send('welcome');
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

    
    
    
    


