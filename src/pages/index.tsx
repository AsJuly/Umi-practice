// import styles from './index.less';
// import { NavLink } from 'umi';
// import { Button } from 'antd'

// export default function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Umi3.0练习</h1>
//       {/* 登录 */}
//       <NavLink to="/login">
//       <Button type="primary" className={styles.btns} block>登录</Button>
//       </NavLink>

//       {/* 样式模块化案例 */}
//       <NavLink to="/styleing">
//         <Button type="primary" className={styles.btns} block>样式模块化案例</Button>
//       </NavLink>

//       {/* Hooks+函数式编写组件 */}
//       <NavLink to="/hookscom">
//         <Button type="primary" className={styles.hook} block>Hooks+函数式编写组件</Button>
//       </NavLink>

//       <NavLink to="/route/routes">
//         <Button type="primary" className={styles.hook} block>Umi路由-配置型-权限路由-动态路由</Button>
//       </NavLink>

//     </div>
//   );
// }


// // import {
// //   WechatFilled, Html5Filled, CodeSandboxCircleFilled, AppstoreOutlined, MailOutlined, ContainerOutlined, MenuFoldOutlined,
// //   MenuUnfoldOutlined,
// // } from '@ant-design/icons';
// // import { Link } from 'umi';
// // import { Button, Layout, Menu } from 'antd';
// // import styles from './index.less'
// // import { ReactChild, ReactFragment, ReactPortal, useState} from 'react';
// // import type { MenuProps } from 'antd';


// // const { Header, Content, Sider } = Layout
// // // 头部导航
// // const items: MenuProps['items'] = [
// //   {
// //     label: '学习菜单',
// //     key: 'mail',
// //     icon: <Html5Filled />
// //   },
// //   {
// //     label: '总结中心',
// //     key: 'app',
// //     icon: <CodeSandboxCircleFilled />
// //   }

// // ]

// // // 左侧导航

// // export default function App(propos: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
// //   const [current, setCurrent] = useState('mail');
// //   const [collapsed, setCollapsed] = useState(false);
// //   const routes = [
// //   {
// //     name: '样式模块化案例',
// //     path: '/styleing',
// //     routes:[ {
// //       name:'routes',
// //       path:'/route/routes'
// //   }]
// //   },
// //   {
// //     name: 'Hooks+函数式编写组件',
// //     path: '/hookscom',
// //     routes:[ {
// //       name:'routes',
// //       path:'/route/routes'
// //   }]
// //   },
// //   {
// //     name: '路由',
// //     path: '/route',
// //     routes:[ {
// //       name:'routes',
// //       path:'/route/routes'
// //   }]
   
// //   }
// //   ]

// //   const toggleCollapsed = () => {
// //     setCollapsed(!collapsed)
// //   };

// //   const onClick: MenuProps['onClick'] = e => {
// //     console.log('click ', e);
// //     setCurrent(e.key);
// //   };

// //   return (
// //     <Layout className={styles.layout}>
// //       <Header className={styles.header}>
// //         <div className={styles.logoText}><WechatFilled className={styles.logoIMG} />Umi3</div>
// //         <Menu className={styles.Menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// //       </Header>
// //       <Layout>
// //         {/* 左侧导航 */}
// //         <Sider
// //           collapsed={collapsed}>
// //           <div>
// //             <Menu
// //               defaultOpenKeys={['sub1']}
// //               mode="inline"
// //               theme="dark"
// //               inlineCollapsed={collapsed}
// //             >
// //               <Menu.Item key={'/login'} icon={<MailOutlined />}>
// //                 <Link to='/login'>登录</Link>
// //               </Menu.Item>
// //               {
// //                 routes.map((item,index) => {
// //                   return (
// //                     <Menu.SubMenu key={index} title={item.name} icon={<MailOutlined />}>
// //                       <Menu.Item key="two" icon={<AppstoreOutlined />}>
// //                         <Link to={item.routes[0].path}>{item.name}</Link>
// //                       </Menu.Item>
// //                     </Menu.SubMenu>
// //                   )
// //                 })
// //               }

// //              </Menu>
// //             <Button type="primary" onClick={toggleCollapsed} style={{ marginTop: 110 }}>
// //               {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
// //             </Button>
// //           </div></Sider>


// //         <Content>{propos.children}</Content>
// //       </Layout>
// //     </Layout>
// //   )
// // }

