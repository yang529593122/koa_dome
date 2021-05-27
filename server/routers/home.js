const Router = require('koa-router');
const mysql = require('../module/mysql')
let router = new Router();
router.get('/article/list',async(ctx)=>{
    let sql_str='SELECT * from article'
    let data =  await mysql.query(sql_str)
    console.log(data)

    ctx.body =  {
        code:0,
        data:data,
        message:'请求成功'
    }
    // await ctx.render('index', {
    //     article_data: data
    // })
})

module.exports=router;


