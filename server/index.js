const Koa = require ('koa');
const Router = require ('koa-router');
const render = require ('koa-art-template');
const static = require('koa-static');
const path = require ('path');
const configuration = require('./config/default.js');


const app = new Koa();
app.use(static(__dirname+'/static'));

// 配置 html 模版
render(app, {
    root: path.join(__dirname, 'pages'), // 视图的位置
    extname: '.html', // 后缀名
    debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
})
// 引入 路由模版
const home=require('./routers/home.js');
const router = new Router();
// 装载子路由
router.use('/',home.routes());

// 加载中间件

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(configuration.port);