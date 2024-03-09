const express=require('express')
const routes=express.Router();

routes.get('/',function(req,res){
    const data=req.body;
    console.log(data)
    res.render('help')
})
module.exports = routes;