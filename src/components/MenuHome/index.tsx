import {
  MailOutlined, MenuFoldOutlined,CloudUploadOutlined,Html5Outlined,HourglassOutlined,LoadingOutlined,
  MenuUnfoldOutlined, ApartmentOutlined, GatewayOutlined,SmileOutlined,ThunderboltOutlined,GlobalOutlined
 , RocketOutlined,ReadOutlined,FileTextOutlined,LaptopOutlined} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import styles from './index.less'
import type { MenuProps } from 'antd';
import { history ,useLocation} from 'umi';


const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('首页', '/home/menuhome/versions',<SmileOutlined />),
  getItem('Seven生命周期', '/home/menuhome/lifecycle',<ThunderboltOutlined />),
  getItem('Upload', '/home/menuhome/upload',<CloudUploadOutlined />),
  getItem('Umi样式', '/home/styles',<Html5Outlined />, [
    getItem('样式总结', '/home/menuhome/styles'),
  ]),
  getItem('Hooks使用', '/home/hooks', <HourglassOutlined />, [
    getItem('Hooks总结', '/home/menuhome/hooks'),
    getItem('404', '/sadadasda', null,
      [getItem('测试', '7'),
      getItem('666', '8')]
    ),
  ]),
  getItem('Umi路由', '/home/routes',<ApartmentOutlined />, [
    getItem('路由总结', '/home/menuhome/routes')
  ]),
  getItem('Umi传参', '/home/skip',<GatewayOutlined />, [
    getItem('声明式跳转传参', '/home/menuhome/Skip/declaration'),
    getItem('编程式跳转传参', '/home/menuhome/Skip/programme'),
  ]),
  getItem('Fetch请求', '/home/fetch',<RocketOutlined />, [
    getItem('Fetch请求', '/home/menuhome/fetch'),
  ]),
  getItem('Request请求', '/home/request',<GlobalOutlined />, [
    getItem('Request请求', '/home/menuhome/request'),
  ]),
  getItem('Dva', '/home/dva',<ReadOutlined />, [
    getItem('Umi状态管理-Dva', '/home/menuhome/dva'),
  ]),
  getItem('WangEditor', '/home/wangeditor',<FileTextOutlined />, [
    getItem('WangEditor-富文本', '/home/menuhome/wangeditor'),
  ]),
  getItem('WebSocket', '/home/websocket',<FileTextOutlined />, [
    getItem('Echarts', '/home/menuhome/websocket'),
  ]),
  getItem('TS', '/home/ts',<LaptopOutlined />, [
    getItem('TS-练习', '/home/menuhome/ts'),
  ]),
];

// const items: MenuProps['items'] = [
//     {
//         label: '首页',
//         key: '/menuhome/home/versions',
//         icon: <MailOutlined />,
//     },
//     {
//         label: '样式总结',
//         key: '/menuhome/styles',
//         icon: <MailOutlined />,
//         children: [
//             {
//                 label: '样式总结',
//                 key: '/menuhome/home/styles',
//                 icon: <MailOutlined />,
//             }
//         ],
//     },
//     {
//         label: 'Hooks总结',
//         key: '/menuhome/hooks',
//         icon: <MailOutlined />,
//         children: [
//             {
//                 label: 'Hooks总结',
//                 key: '/menuhome/home/hooks',
//                 icon: <MailOutlined />,
//             }
//         ],
//     },
//     {
//         label: '路由总结',
//         key: '/menuhome/routes',
//         icon: <MailOutlined />,
//         children: [
//             {
//                 label: '路由总结',
//                 key: '/menuhome/home/routes',
//                 icon: <MailOutlined />,
//             }
//         ],
//     },

// ]


// 左侧导航

export default function MenuHome(propos: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  const [collapsed, setCollapsed] = useState(false);
  const locations = useLocation().pathname
  const [url,setUrl] = useState(locations)

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    // 获取key跳转
    history.push(e.key);
    console.log(url)
    setUrl(e.key)
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };


  return (
    <div>

      <Layout className={styles.layouts}>
        {/* 左侧导航 */}
        <Sider
          collapsed={collapsed}>
          <div>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={[url]}
              mode="inline"
              theme="light"
              items={items}
              className={styles.menu}
            />
            <Button type="dashed" onClick={toggleCollapsed} className={styles.btn_control}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </div>
        </Sider>
        <Content>{propos.children}</Content>
      </Layout>

    </div>
  )
}

