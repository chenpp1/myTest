const express = require("express");
const router = express.Router();
const url = require("url")
router.get("/login",(req,res)=>{
    res.sendFile(url.resolve(__dirname,"./public/login.html"));
})
router.get("/home",(req,res)=>{
    res.sendFile(url.resolve(__dirname,"./public/index.html"));
})
router.get("/user",(req,res)=>{
    res.sendFile(url.resolve(__dirname,"./public/user.html"));
})
module.exports = router;