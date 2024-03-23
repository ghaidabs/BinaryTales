import express from "express";
import { MongoBDURL,PORT } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import loginRoutes from './routes/login.js';
import signupRoutes from './routes/signup.js';

const app = express();
  
//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/login',loginRoutes);
app.use('/api/signup',signupRoutes);


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

    
    
    
    


