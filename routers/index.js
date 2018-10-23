const express = require("express");
const router = express.Router();
const url = require("url");
const userCon = require("../controllers/userControllers");
router.get("/",userCon.index)
// router.post("/userlist",userCon.userlist);

module.exports = router ;