const Koa = require ('koa');
const Router = require ('koa-router');
const configuration = require('./config/default.js');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');


const app = new Koa();

app.use(cors());
app.use(bodyParser());

// 引入 路由模版
const home=require('./routers/home.js');
const users=require('./routers/users.js');
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(home.routes());
app.use(users.routes());

app.listen(configuration.port);