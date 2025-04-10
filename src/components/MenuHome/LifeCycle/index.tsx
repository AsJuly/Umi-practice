import React, { Component } from 'react'
import { Button, Avatar, Card } from 'antd'
import styles from './index.less'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

class LifeCycle extends Component {
  state = { count: 1, list: [1, 2, 3, 4] }

  // react 17 新钩子 执行在构造器之后 render之前  挂载时掉用 组件数据改变更新的时候 首先调用
  static getDerivedStateFromProps(propos: void, state: void): void {
    console.log(propos)  //返回一整个大对象 包含 location，children，history等
    console.log(state)   //返回当前 state中的数据  显示的是更新过后的值
    return propos
  }
  // 组件挂载完毕  一般开启监听 用于发送请求等
  componentDidMount(): void {
    console.log('组件挂载完毕 ------componentDidMount')
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    return true         //必须有一个返回值 如果 值为true 则可以进行更新下去 如果 值为 false 则不可以更新下去
    //为 false 时  界面数据不会改变 只会执行 getDerivedStateFromProps 这一个函数
    //  此处通常 可以做一些判断 进行数据的拦截 致使页面不更新
  }

  // 组件将要更新之前 '快照' 需要和componentDidUpdate 一起用 否则报错
  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log('我可以更新')
    console.log(prevProps)  //返回一整个大对象 包含 location，children，history等
    console.log(prevState)   //比上面多了一个 state   显示的是更新前的值
    return prevState
  }
  // 组件更新之后调用
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log(prevProps)  //返回一整个大对象 包含 location，children，history等
    console.log(prevState)  //比上面多了一个 state 显示的是更新前的值
  }



  // 组件卸载之前  一般做一些收尾工作 清除定时器等
  componentWillUnmount(): void {
    console.log('组件卸载之前 ------componentWillUnmount')
  }

  Add = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    let { count } = this.state
    return (
      <div className='box'>
        <div>{count}</div>
        <Button type='dashed' onClick={this.Add} style={{ width: 300 }}>点我+1</Button>

        {/* 卡片模板 */}
        <div className={styles.Card}>
          {
            this.state.list.map((item, index) => {
              return (
                <Card
                  key={index}
                  style={{ width: 300,marginRight:10,marginLeft:10,flex:1}}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              )
            })
          }




        </div>

      </div>
    )
  }
}

export default LifeCycle
