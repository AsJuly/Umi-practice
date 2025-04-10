export default [
  {
    path:'/',
    component:'@/components/Nav',
    wrappers:['@/wrappers/auth'],
  },
  {
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
                name: 'react17生命周期',
                path: '/home/menuhome/lifecycle',
                component: '@/components/MenuHome/LifeCycle',
              },
              {
                name: 'Umi上传',
                path: '/home/menuhome/upload',
                component: '@/components/MenuHome/Upload',
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
                title:'Umi',
                path: '/home/menuhome/dva',
                component: '@/pages/Dva',
              },
              {
                name: 'WangEditor-富文本',
                path: '/home/menuhome/wangeditor',
                component: '@/pages/WangEditor',
              },
              {
                name: 'WebSocket + Echarts',
                path: '/home/menuhome/websocket',
                component: '@/pages/WebSocket',
              },
              {
                name: 'TS练习',
                path: '/home/menuhome/ts',
                component: '@/components/TsPratice',
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
  {paht:'/login',component:'@/pages/Login'},
  // 若找不到上方已有的页面地址 则跳转404页面

  { component: '@/pages/404' },
]

