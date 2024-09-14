const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    res.send("<h1></h1>this app is running</h1>");
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`)
})