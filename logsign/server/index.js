require('dotenv').config();
const express=require('express');
const cors=require('cors');
const connection=require("./db");
const loginRoutes=require('./routes/login');
const signupRoutes=require('./routes/signup');


//database connection
connection();

//creating the express app
const app=express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/login',loginRoutes);
app.use('/api/signup',signupRoutes);

//setting port for server side
const port=process.env.PORT || 8080;
app.listen(port,() =>console.log(`Listening on port ${port}...`));