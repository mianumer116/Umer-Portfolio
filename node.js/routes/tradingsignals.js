const express=require('express');
const routes=express.Router();

routes.get('/',function(req,res){
    
    try{
        res.render('tradingsignal')
    }catch(error){
        console.log(error)
    }
})
module.exports=routes;