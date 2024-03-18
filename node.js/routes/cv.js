const express=require('express');
const routes=express.Router();
const path = require('path');
routes.get("/",function(req,res){
    const filePath = path.join(__dirname, '../views', 'umer.jpg');
    res.download(filePath);
})

module.exports=routes;