export default {
    'GET /umi/goods':[
      {id:1,name:'阿水'},
      {id:2,name:'星子'},
      {id:3,name:'望舒'},
    ],
    'GET /umi/auth':(req: any,res: { send: (arg0: { isLogin: boolean }) => void })=>{
      res.send({
        isLogin:true
      })
    },
    'GET /umi/menus':(req: any,res: { send: (arg0: { path: string; component: string; routes: ({ name: string; path: string; routes: { name: string; path: string; component: string; routes: ({ name: string; path: string; component: string; routes?: undefined } | { name: string; path: string; routes: { name: string; path: string; component: string }[]; component?: undefined })[] }[]; component?: undefined } | { component: string; name?: undefined; path?: undefined; routes?: undefined })[] }[]) => void })=>{
      res.send([ {
        path: '/home',
        component: '@/pages/layouts/base-layouts',
        routes: [
          {
            name: '学习菜单',
            path: '/home/menuhome',
            routes: [
              {
                name: '学习菜单首页',
                path: '/home/menuhome',
                component: '@/components/MenuHome',
                routes: [
                  {
                    name: '学习菜单首页',
                    path: '/home/menuhome/versions',
                    component: '@/components/MenuHome/Home',
                  },
                  {
                    name: '样式模块化案例',
                    path: '/home/menuhome/styles',
                    component: '@/pages/Styleing',
                  },
                  {
                    name: 'Hooks+函数式编写组件',
                    path: '/home/menuhome/hooks',
                    component: '@/pages/HooksCom',
                  },
                  {
                    name: '路由练习',
                    // params传值练习
                    // path: '/home/menuhome/routes/:a',
                    path: '/home/menuhome/routes',
                    component: '@/pages/RouteTable',
                  },
                  {
                    name: 'Umi跳转',
                    path: '/home/menuhome/Skip',
                    routes:[
                      {
                        name:'声明式',
                        path:'/home/menuhome/Skip/declaration',
                        component:'@/pages/Declaration'
                      },
                      {
                        name:'编程式',
                        path:'/home/menuhome/Skip/programme',
                        component:'@/pages/Programme'
                      },
                      
                    ],
         
                  },
                  {
                    name: 'fetch请求',
                    path: '/home/menuhome/fetch',
                    component: '@/pages/Fetch',
                  },
                  {
                    name: 'Request请求',
                    path: '/home/menuhome/request',
                    component: '@/pages/Request',
                  },
                  {
                    name: 'Umi状态管理-Dva',
                    path: '/home/menuhome/dva',
                    component: '@/pages/Dva',
                  },
                ],
              },
            ],
          },
          {
            name: '总结中心',
            path: '/home/allhome',
            routes: [
              {
                name: '总结中心首页',
                path: '/home/allhome',
                component: '@/components/AllHome',
                routes: [
                  {
                    name: '总结中心首页',
                    path: '/home/allhome/ectype',
                    component: '@/components/AllHome/Home',
                  },
                ],
              },
            ],
          },
          // { path: '/home', redirect: '/home/menuhome/versions' },
          { component: '@/pages/404' },
        ],
      },
    ])
    },
}