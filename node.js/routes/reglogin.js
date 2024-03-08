const express=require('express');
const { admin } = require('../models/todo.js');
const routes=express.Router();
const { getuser, setuser } = require('../controllers/auth.js');
routes.get('/',function(req,res){
    const admin=req.cookies.admin;
    if(!admin){
        res.render("reglogin");

    }
    const admins=getuser(admin);
    if(!admins){
        res.render('reglogin')
    }

    if(admins){
        res.render("regpage")
    }

})

routes.post('/',async function(req,res){
  const {email,password}=req.body;
  const result=await admin.findOne({email,password});
  if(result){
    const admin=setuser(result)
    res.cookie('admin',admin).render('regpage')

  }
  if(!result){
    res.send('Check your email password and try again')
  }
})

module.exports=routes;