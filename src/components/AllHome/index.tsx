import {
    MailOutlined, MenuFoldOutlined, AppstoreOutlined, SettingOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import { Button, Layout, Menu } from 'antd';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import styles from './index.less'
import { MenuProps } from 'antd';


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
    getItem('首页', '/home/allhome/ectype', <MailOutlined />),
    getItem('样式总结', '/menuhome/styles', <MailOutlined />, [
        getItem('样式总结', '/menuhome/home/styles'),
    ]),
    getItem('Hooks总结', '/menuhome/hooks', <AppstoreOutlined />, [
        getItem('Hooks总结', '/menuhome/home/hooks'),
        getItem('404', '/sadadasda', null, [getItem('测试', '7'), getItem('666', '8')]),
    ]),

    getItem('路由总结', '/menuhome/routes', <SettingOutlined />, [
        getItem('路由总结', '/menuhome/home/routes'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

// 左侧导航

export default function AllHome(propos: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
    const [collapsed, setCollapsed] = useState(false);

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        // 获取key跳转
        history.push(e.key);
    };

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    return (
        <div>
            {/* 左侧导航 */}
            <Layout  className={styles.layout}>
                <Sider
                    collapsed={collapsed}>
                    <div>
                        <Menu
                            onClick={onClick}
                            defaultSelectedKeys={['/home/allhome/ectype']}
                            defaultOpenKeys={['sub1']}
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
