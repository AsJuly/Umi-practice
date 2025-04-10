export default {
    '/api':{
        // 要代理的真实服务器地址
        target:'https://xxxxxxxxxx',
        // 配置了这个可以从http代理到 https
        https:true,
        // 依赖 origin  的功能可能需要这个 比如 cookie
        changeOrigin:true,
        // 路径替换
        pathRewrite:{'^/api':''},
    },
    // "/book":{
    //     target:'https://api.zhuixxxxx',

    // }
}