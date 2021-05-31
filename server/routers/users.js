const Router = require('koa-router');
const mysql = require('../module/mysql')
const jwt = require('jsonwebtoken')
const configuration = require('../config/default.js');
let router = new Router();
router.post('/user/login',async(ctx)=>{
    let sql_str=`SELECT * from user_list WHERE name='${ctx.request.body.username}' AND password='${ctx.request.body.password}'`;
    let userInfo= await mysql.query(sql_str)
    let user={
        uid:userInfo[0].uid,
        uname:userInfo[0].name
    }
    let token = jwt.sign(user,configuration.secret,configuration.token_time)
    user.token=token
    ctx.body =  {
        code:0,
        data:user,
        message:'请求成功'
    }
})
module.exports=router;


