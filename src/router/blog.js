//存放blog路由相关内容
function handleBlogRouter(req,res){
    const method = req.method;
    if(method == 'GET'&&req.path == '/api/blog/list'){
        //向数据库获取博客信息
        return{
            id:'111111',
            a:'bbbb'
        }
    }

    if(method=='GET' && req.path=='/api/blog/detail'){
        // 向数据库获取博客信息
        return {
            id:'1',
            title:'标题1',
            content:'详情内容XXXXXXXXXXXXX',
            time:'2353425345'
        }
       }

    //新增一篇博客
    if(method=='POST' && req.path=='/api/blog/new'){
        // 向数据库获取博客信息
        return {
            title:'新增一篇博客'
        }
       }

       //更新一篇博客
    if(method=='POST' && req.path=='/api/blog/update'){
        // 向数据库获取博客信息
        return {
            title:'更新一篇博客'
        }
       }
    

    //删除一篇博客
    if(method=='POST' && req.path=='/api/blog/del'){
        // 向数据库获取博客信息
        return {
            title:'删除一篇博客'
        }
       }
}

module.exports=handleBlogRouter;