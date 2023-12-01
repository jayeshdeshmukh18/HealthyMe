const express = require("express");
const { Admin } = require("../models/admin.model");
const { model } = require("mongoose");
const admintRoute = express.Router();

admintRoute.post("/",async(req,res)=>{
    const {email,password} = req.body;
    let user = await Admin.findOne({email,password});
    if(user){
        return res.send({msg:"success"});
    }else{
        return res.send({msg:"failed"});
    }
})

module.exports = {
    admintRoute
}