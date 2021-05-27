const Router = require('koa-router');
const mysql = require('../module/mysql')
let router = new Router();
router.get('/',async(ctx)=>{
    let sql_str='SELECT * from article'
    let data =  await mysql.query(sql_str)
    await ctx.render('index', {
        article_data: data
    })
})

module.exports=router;