//处理http请求和响应
const handleBlogRouter=require('./src/router/blog');
const handleUserRouter=require('./src/router/user');
const querystring=require('querystring');
function hadleServer (req,res){
    // api
    const method=req.method;
    req.path=req.url.split('?')[0];  //api/blog/list?keyword=XXX
    res.setHeader('Content-type','application/json')
    req.query=querystring.parse(req.query=req.url.split('?')[1]);

    //处理博客列表请求
    const blogDate=handleBlogRouter(req,res);
    if(blogDate){
        res.end(JSON.stringify(blogDate));
        return;
    }

    //处理用户（登录/注册)请求
    const userDate=handleUserRouter(req,res);
    if(userDate){
        res.end(JSON.stringify(userDate));
        return;
    }
} 

module.exports=hadleServer;

//业务模块抽离 : 一个模块做一类事