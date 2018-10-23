const express = require("express");
const router = express.Router();
const url = require("url");
const userCon = require("../controllers/userControllers");
// router.get("/user",(req,res)=>{
//     // res.sendFile(url.resolve(__dirname,"./public/index.html"));
//     let {username,password} = req.query;
//     // console.log(req.query)
//     //解决中文乱码问题
//     res.set({
//         "Content-Type":"text/plain;charset=utf-8",
//         "Content-Length":"123",
//         "Etag":"12345"
//     })
//     res.send(`用户名${username}密码${password}`);
// })
router.post("/user",userCon.login);
router.post("/userlist",userCon.userlist);
module.exports = router;