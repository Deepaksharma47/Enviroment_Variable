const express = require("express");

const app = express();

require("dotenv").config();


const port = process.env.PORT || 4000;

const variables = process.env.NODE_ENV || "development";


app.get("/",(req,res) =>{
    res.send(`<h1>this app is running ${port} on enviroment ${variables}</h1>`);
})

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`)
})