import { WechatFilled, Html5Filled, CodeSandboxCircleFilled, UserOutlined,QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';
import { history, useLocation,Link } from 'umi';
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import styles from './index.less'
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import type { MenuProps } from 'antd';


// 下拉框
const items: MenuProps['items'] = [
  {
    key: '1',
    label: '个人中心',
  },
  {
    key: '2',
    label: (
      <Link to='/login'>退出登录</Link>
    ),
  },
  // {
  //   key: '3',
  //   label: (
  //     <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
  //       3rd menu item
  //     </a>
  //   ),
  // },
];


const { Header } = Layout
// 头部导航
const itemss: MenuProps['items'] = [
  {
    label: '学习菜单',
    key: '/home/menuhome/versions',
    icon: <Html5Filled />,
  },
  {
    label: '总结中心',
    key: '/home/allhome/ectype',
    icon: <CodeSandboxCircleFilled />,
  },

]



export default function BaseLayouts(propos: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  const location = useLocation().pathname

  const [current, setCurrent] = useState(location)

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
    // 跳转到指定路由
    history.push(e.key);
  };

  return (
    <Layout className={styles.layout}>

      <Header className={styles.header}>
        <div className={styles.logoText}>
        <Html5Filled  className={styles.logoIMG}/>Umi3</div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={itemss} />
        {/* 右侧信息 */}
        <div className={styles.right_s}>
          <div className={styles.icons}><QuestionCircleOutlined /></div>
          <div className={styles.tip}><BellOutlined /></div>
          <Space direction="vertical">
            <Space wrap>
              <Dropdown menu={{ items }} overlayClassName={styles.dropdown} placement="bottomRight">
              <div className={styles.user}>
              <UserOutlined/>
              <span>超级管理员</span>
                </div>
              </Dropdown>
            </Space>
          </Space>


        </div>
      </Header>
      <div className={styles.silder}>
        {propos.children}
      </div>

    </Layout>
  )
}

