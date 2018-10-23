const userModule = require("../Module/userModule");
const template = require("art-template");
const url = require("url");
const userController = {
    login:(req,res)=>{
        // res.sendFile(url.resolve(__dirname,"./public/index.html"));
        let {username,password} = req.body;
        console.log(req.body);
        // console.log(req.query)
        //解决中文乱码问题
        res.set({
            "Content-Type":"text/plain;charset=utf-8",
            "Content-Length":"123",
            "Etag":"12345"
        })
        res.send(`用户名${username}密码${password}`);
    },
    userlist:(req,res)=>{
        // let {username,password} = req.body;
        // res.send(userModule.save({...req.body}))
        let html = template(url.resolve(__dirname,'views/userList.art'), {
            errmsg:'',
            zhengque:true,
            data:userModule.save({...req.body})
        });
        res.send(html)
    },
    index:(req,res)=>{
        res.set({
            "Content-Type":"text/html;charset=utf-8"
        })
        res.render('index.ejs',{
            data:userModule.banner,
            hotweek:userModule.hotweek,
            hotpro:userModule.hotpro,
            ms:userModule.ms,
            tab:userModule.tab,
            ul:userModule.ul
        })
    },
    prolist:(req,res)=>{
        res.set({
            "Content-Type":"text/html;charset=utf-8"
        })
        res.render('prolist.ejs',{
            prolist:userModule.prolist
        })
    },
    act:(req,res)=>{
        res.set({
            "Content-Type":"text/html;charset=utf-8"
        })
        res.render('act.ejs',{
            prolist:userModule.prolist
        })
    }
}
module.exports = {
    login:userController.login,
    userlist:userController.userlist,
    index:userController.index,
    prolist:userController.prolist,
    act:userController.act
};