import { connect } from "umi"
import { Collapse, Button } from 'antd';
import Child from "./Child";
import { ReactChild, ReactFragment, ReactPortal } from "react";
const { Panel } = Collapse;

const Dva = (propos: { dispatch: (arg0: { type: string; payload?: { a: number; b: number; } | { username: string; password: string; }; }) => void; text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; A: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; isLogin: any; dva: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; a: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; b: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  // 全局global Dva 数据----------------------------------------------------------------------

  // 改变登陆状态
  const toLogin = () => {
    // 利用 dispatch 调用 全局数据文件 global.js里面的 函数
    propos.dispatch({
      type: 'global/signin'
    })
  }
  // 改变text数据
  const toText = () => {
    propos.dispatch({
      type: 'global/setText'
    })
  }
  // 改变title数据
  const toTitle = () => {
    propos.dispatch({
      type: 'global/setTitle',
      payload: { a: 1, b: 10 }
    })
  }
  const Logins = () =>{
    propos.dispatch({
      // type 为 global/login 调用异步中的 login函数
      type:'global/login',
      payload:{
        username:'admin',
        password:'123456'
      }
    })
  }

  // 页面global Dva 数据改变----------------------------------------------------------------------
  // 改变 model中的state数据
  const toDva = () =>{
    propos.dispatch({
      type:'dva/setStr'
    })
  }

  return (
    <div  className='box'>
      <div style={{ fontSize: 30, textAlign: "center" }}>Dva</div>
      {/* 获取 models 中保存的全局数据 */}

      <Collapse defaultActiveKey={['1']} ghost>
        {/* 全局数据 */}
        <Panel style={{ fontSize: 26 }} header="全局global公共数据" key="1">
          <div style={{ fontSize: 24 }}>text:{propos.text}</div>
          <div style={{ fontSize: 24 }}>title:{propos.title}</div>
          <div style={{ fontSize: 24 }}>A:{propos.A}</div>
          {propos.isLogin ? <div>已登录</div> : <div>未登录</div>}

          {/* 改变text数据 */}
          <Button type='dashed' onClick={toText} block style={{ height: 50, background: '#aec4b7' }}>改变text数据</Button>

          <br />
          <br />

          {/* 改变title数据 */}
          <Button type='dashed' onClick={toTitle} block style={{ height: 50, background: '#17507d' }}>改变title数据</Button>

          <br />
          <br />
          {/* 改变登录状态 */}
          <Button type='dashed' onClick={toLogin} block style={{ height: 50, background: '#793d56' }}>登录改变状态</Button>

          <br />
          <br />
          {/* 异步登录 */}
          <Button type='dashed' onClick={Logins} block style={{ height: 50, background: '#c3c2d7' }}>异步登录改变状态</Button>
        </Panel>

        {/* 页面数据级别 */}
        <Panel style={{ fontSize: 26 }} header="局部global公共数据" key="2">
          <div style={{ fontSize: 24 }}>Dva里models.ts数据:{propos.dva}</div>
          <div style={{ fontSize: 24 }}>Dva里 model文件夹中 a の 数据:{propos.a}</div>
          <div style={{ fontSize: 24 }}>Dva里 model文件夹中 b の 数据:{propos.b}</div>

          {/* 改变数据 */}
          <Button type='dashed' onClick={toDva} block style={{ height: 50, background: '#c3c2d7' }}>改变model中的数据</Button>

        </Panel>

        {/* 子组件使用全局数据 引用两个Hooks 来实现同样拿到数据的状态 */}
        <Panel style={{ fontSize: 26 }} header="两个Hooks 实现一样的功能" key="3">
          <Child/>
        </Panel>
      </Collapse>
    </div>
  )
}


interface states {
  text: string | number,
  title: string | number,
  a: string | number,
  login: boolean
}
export default connect((state: { global: states; dva: string;a:string;b:string }) => ({
  // 抓取全局的数据 ，可以重命名
  text: state.global.text,
  title: state.global.title,
  A: state.global.a,  //可以对键名 重命名
  isLogin: state.global.login,

  // 抓取页面级的数据
  dva:state.dva,
  a:state.a,
  b:state.b

}))(Dva) //最后一个小括号 内 填写组件名
