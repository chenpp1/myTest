const express = require("express");
const app = express();
// const home = require("./routers/home");
// const user = require("./routers/user");
const index = require("./routers/index");
const prolist = require("./routers/prolist");
const act = require("./routers/act");
const bodyParser = require("body-parser");
//post
//静态资源配置
app.use(express.static(__dirname+'/public'))

//模板引擎配置 art  ejs   pug(jade)
app.set('view engine','ejs');
app.set('views',__dirname+'/views')
//post
app.use(bodyParser.urlencoded({ extended: false }));
//json
app.use(bodyParser.json());
app.use("/index.html",index);
app.use("/prolist.html",prolist);
app.use("/act.html",act);

app.listen(3000,"localhost",()=>{
    console.log("localhost:3000")
})