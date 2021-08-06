const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt=require('bcryptjs');


//get request for testing register
router.get("/register", async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
      res.send(user);
    } catch (error) {
      res.json({ message: "something is wrong" });
    }
  });

//post request
router.post("/register", async(req,res)=>{

    const {name,password: plainTextPassword}=req.body;

    const password=await bcrypt.hash(plainTextPassword,10);

    try{
        const res = await User.create({
            name,
            password
        })
        console.log(res);
        res.json(savedUser);
    }catch(error){
        res.send({message:'error'});
    }
});

//get request for testing login
router.get('/login',async(req,res)=>{
    res.json({status:'ok'})
})

router.post('/login',async(req,res)=>{
    res.json({status:'ok'})
})

module.exports=router;