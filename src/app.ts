// import { request, history } from "umi"

// // let routeDate: never[] = []  //动态读取的路由数据
// // export function patchRoutes({routes}){
// //         // 动态添加路由
// //         // routes 原本的 路由 数据
// //         console.log(routes)
// //         // 添加一条数据
// //         // console.log('添加之前的 老数据 和要添加的数据',routes, 'new' ,routeDate )
// //         // routes.push({exact:true,component:require('@/pages/404').default})
// //         // console.log('添加之后的数据',routes )

// //         const filterRoutes = (routeDate: any[])=>{
// //             routeDate.map((item: { routes: string | any[]; exact: boolean; redirect: any; component: string | string[]; wrappers: any[] })=>{
// //                 if(item.routes && item.routes.length>0){
// //                     filterRoutes(item.routes)
// //                 }else {
// //                     item.exact = true
// //                 }
// //                 if(!item.redirect){
// //                     if(item.component.includes('404')){
// //                         item.component = require('@/' + item.component + '.tsx').default
// //                     }else {
// //                         item.component = require('@/' + item.component + '/index.tsx').default
// //                     }
// //                     if(item.wrappers && item.wrappers.length>0){
// //                         item.wrappers.map((str: string,index) =>{
// //                             item.wrappers[index] = require('@/' + str + '.tsx').default
// //                         })
// //                     }
// //                 }
// //             })
// //         }

// // }

// export const render = async (oldRender: any)=> {
//     // 权限校验业务
//     // 接收 访问接口的数据
//     const {isLogin} = await request('/umi/auth')
//     // 如果是 false  代表没登陆 跳转登录
//     if(!isLogin) {
//         history.push('/login')
//     }else {
//         // 获取路由数据
//         // routeDate = await request('/umi/menus')
//         // console.log(routeDate)
//         // history.push('/home/menuhome/versions')
//     }
//     // oldRender  至少呗调用一次  需要调用 才会渲染页面
//     oldRender()

// }
// // onRouteChange 路由监听 埋点统计
// // 其中包含 matchedRoutes、location、routes、action 四个参数
// // routes 路由集合
// // location location及其参数
// // matchedRoutes 当前匹配的路由 与 其子路由
// // action  当前跳转执行的操作

// // export function onRouteChange(matchedRoutes: any,location: any,routes: any,action: any){
// //     console.log('路由集合',routes)
// //     console.log('location及其参数',location)
// //     console.log('当前匹配的路由 与 其子路由',matchedRoutes)
// //     console.log('当前跳转执行的操作',action)
// // }

// // Umi  拦截器
// export const request  = {
//     // timeout:1000,   //延时
//     // errorConfig:{},  //错误处理
//     // middlewares:[],     //使用中间件

//       //请求拦截
//     requestInterceptors:[
//         (url: string,optinos: { headers: { token: string } })=>{
//             // 请求地址 和 配置项
//             optinos.headers = {token:'xxxxxx'}
//             return {url,optinos}
//         }
//     ],

//     // 响应拦截
//     responseInterceptors:[
//         (response: string|number|string[]|number[],options: string|number|string[]|number[])=>{
//             // 响应体 请求时的配置项
//             return {response,options}
//         }
//     ]
// }
