import  { Component } from 'react'
import styles from './index.less';
import { NavLink } from 'umi';
import { Button } from 'antd'

export default class Styleing extends Component {
    render() {
        return (
            <div className='box'>
                <NavLink to="/">
                    <Button type="primary" className={styles.btns} block>返回首页</Button>
                </NavLink>
                <h2>内部样式引入图片：</h2>
                <div style={{ height: 50 }} className={styles.test1}></div>

                <h2>全局变量：</h2>
                {/* 测试  全局样式 myLink */}
                <div className="title">测试 全局样式</div>

                <h2>局部变量：</h2>
                <div className={styles.header}>测试 局部变量</div>

                <h2>混合：</h2>
                <div id={styles.a1}>测试1</div>
                <div id={styles.a2}>测试2</div>

                <h2>嵌套：</h2>
                <div className={styles.next}>
                    <h3>测试7</h3>
                    <p>测试8</p>
                </div>

                <h2>:global 用法</h2>
                {/*  global 将包裹的部分 变为全局样式  这样 打包后的样式名 前面不会有序列号 */}
                <div className={styles.gobl}>
                    {/* 里面的内容 用 ``套主 */}
                    <div className={`text`}>文字的魅力</div>
                    <div className={`suv`}>汽车大甩卖</div>
                </div>
            </div>
        )
    }
}
