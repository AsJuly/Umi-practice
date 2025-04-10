import React, { Component } from 'react'
import { Button } from 'antd'
import { Space, Spin } from 'antd';


interface states {
  age: number,
  num: number
}

// 类式组件 可以调用生命周期钩子  书写方式 与函数式有所不同
// 类式组件 名字首字母要大写
class SetState extends Component {
  state = { num: 0, age: 9 }
  // 对象式
  Add = () => {
    const { num } = this.state
    // this.setState({num:num+1})
    // 其中 对象式setState 有两个参数 第二个参数是一个回调函数(可选可不选)
    // setState 本身在react 中 是一个同步操作 但是改变数据 引起的动作是异步的 如果在下方打印 改变的值 不会改变
    // 如果想看修改后的数据 第二个参数可以传一个回调函数
    this.setState({ num: num + 1 }, () => {
      console.log('箭头函数 作为回调函数', this.state.num)
    })

  }

  // 函数式
  Big = () => {
    // 默认接收两个参数 一个是组件内state数据， 一个是父组件传来的参数
    this.setState((state: states, propos) => {
      const { num, age } = state
      console.log('常量state的数据:', num)
      console.log('父组件穿来的propos:', propos)
      return { age: age + 1 }
    })
  }

  render() {
    return (
      <div>
        {/* 对象式setState */}
        {/* 类式组件 的常量写法 */}
        <div>{this.state.num}</div>
        <Button type="dashed" onClick={this.Add} block>对象式setState +1</Button>
        <br />
        <br />

        {/* 函数式setState */}
        <div>{this.state.age}</div>
        <Button type="dashed" onClick={this.Big} block>对象式setState +1</Button>
      </div>
    )
  }
}

export default SetState
