const Router = require('koa-router');
const mysql = require('../module/mysql')
let router = new Router();
router.get('/article/list',async(ctx)=>{
    let curPage=ctx.query.page
    let pageSize=ctx.query.pagesize
    let sql_str=`SELECT * from article LIMIT ${(curPage-1)*pageSize},${pageSize}`;
    let sql_count= 'SELECT SQL_CALC_FOUND_ROWS * FROM article '
    let page_count= await mysql.query(sql_count)
    let data =  await mysql.query(sql_str)
    ctx.body =  {
        code:0,
        data:{
            count:page_count.length,
            results:data
        },
        message:'请求成功'
    }
})
module.exports=router;


