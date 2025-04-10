// import styles from './index.less'
// import Son from './Son'
// import AppContext from './Context'
// import { useState } from 'react'
// export default function HooksCom (){
//     const [count,setCount] = useState('祖先数据')
//     return(
//         // 上下文对象 传参
//         <AppContext.Provider value={{count,setCount}}>
//         <div className={styles.box}>
//             <h2>父组件</h2>
//             <Son/>
//         </div>
//         </AppContext.Provider>
//     )
// }


//
import styles from './index.less'
// import Son from './Son'
import SetState from './SetState'
import { Button, Collapse, Drawer } from 'antd'
import { NavLink } from 'umi'
import { useState, useCallback, useEffect,useRef } from 'react'
import ReactDOM from 'react-dom'
const { Panel } = Collapse;



// interface counts {
//     count:number
// }
interface couts {
  cout: number
}

const HooksCom = () => {
  console.log('HooksCom')   //调用 1+n 次  刚开始调用一次 接着每次改变数据都会调用

  // 正常来说 每次都会重新赋值， 但react底层做了处理 对count、value’amount这些数做了缓存
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const [amount, setAmount] = useState(99)
  const [open, setOpen] = useState(false);

  // useRef
  const showList = useRef()

  const btnss = useRef()

  // 可以在函数组件中 执行副作用操作 (用于模拟类式组件中的生命周期钩子)
  // 两个参数 一个写js逻辑，第二个参数用来决定监听哪个值 来执行第一个参数中的逻辑
  // 第一个参数 在 组件初始化 和 监听的数据更新的时候才会调用
  // 若第二个参数为空 则表示都不监听，不些第二个参数表示全监听

  // useEffect  相当于 componentDidMount() componentDidUpdate() componentWillUnmount() 这三个钩子的集合
  // 第一个参数内 相当于在 componentDidMount() componentDidUpdate() 钩子里 初始化会执行 监听的钩子发生改变也会执行
  // 第一个参数的 回到函数 相当于componentWillUnmount 卸载前会执行
  useEffect(() => {
    // let timer = setInterval(()=>{
    //   setCount(count=> count+1)
    // },1000)
    console.log('执行了')
    console.log(document.getElementById('btn'),'获取id')
    console.log(btnss.current,'useRef')

    // useRef 中 声明的变量.current  相当于 document.getElementById('id')

    // 第一个参数 里面可以写一个回调函数 这个回调函数相当于 即将卸载组件的生命周期钩子
    return () => {
      // clearInterval(timer)
      console.log('清楚了定时器')
    }
  }, [amount])  //监听的值

  //  卸载节点组件
  const unmount = () => {
    const root = document.getElementById('root')!
    ReactDOM.unmountComponentAtNode(root)
  }

  // 控制 右侧隐藏栏
  const showDrawer = () => {
    setOpen(true);
  };
  // 控制 右侧隐藏栏
  const onClose = () => {
    setOpen(false);
  };
  // umi练习
  const getNume = () => {
    console.log('getNum', count)
    return count * 10
  }

  // useRef 练习
  const showToast = () =>{
    alert((showList.current.value))

    // alert((showList.current.value))
  }
  // 相加 setState 练习
  const Adds = () => {
    setAmount(amount + 1)
  }



  //useMemo 解决  父组件更新 子组件跟着更新的问题  直接在子组件用 memo包裹可以，但是有 bug
  //  在父组件往子组件传递函数的时候 之后只要父组件改变 子组件的值不管是否更改都会重新渲染
  //  此时需要配合 useMemo() 和 useCallback()

  // const getNumMemo =  useMemo(()=>{
  //     console.log('getNum',count)
  //     return count * 10   //此处应返回一个函数 因为只有一个值 就写了单个

  // return ()=>{
  //   setXXX({a:a+1})
  // }


  // },[count]) //此处是对该值的监控  如果改变就执行 不改变不执行

  // 利用 useCallback 对该函数进行缓存 只执行一次
  // const update = useCallback(() => console.log('父组件发生变化'), [])


  // se

  return (
    // 上下文对象 传参
    <div className='box'>

      <Button type='dashed' id='btn' ref={btnss} style={{ width: '100%', height: 60, backgroundColor: '#3ef8', fontSize: 30, textAlign: "center" }} onClick={showDrawer}>Hooks</Button>
      {/* 获取 models 中保存的全局数据 */}

      <Collapse defaultActiveKey={['5']} ghost>
        {/* Umi-hooks练习 */}
        <Panel style={{ fontSize: 26 }} header="Umi-Hooks" key="1">
          <NavLink to="/home/menuhome/versions">
            <Button type="primary" className={styles.btns} block>返回首页</Button>
          </NavLink>
          <h2>父组件</h2>
          {/* useMemo  传两个参数 一个函数 一个要监听的参数 */}
          <div>getNum: {getNume()}</div>
          <Button type="primary" onClick={() => setCount(count + 1)} block>+1</Button>
          <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} />
          {/* 此时每次input数据发生变化的时候 都会调用render刷新 重新 执行 getNum 函数 太过消耗性能 */}

          {/* 若传递 的是一个值 可以用 memo 包裹子组件解决 */}
          {/* <Son count={count}/> */}

          {/* 若 传递的是一个函数  */}
          {/* <Son updateCount={update}></Son> */}
        </Panel>

        {/* setState 类式组件方式 */}
        <Panel style={{ fontSize: 26 }} header="setState" key="2">
          <SetState cout={111} />
        </Panel>

        {/* state 函数式组件方式 */}
        <Panel style={{ fontSize: 26 }} header="State" key="3">
          <div>{amount}</div>
          {/* 简写 */}
          {/* <Button type="dashed" onClick={()=>setAmount(amount+1)} block>useState +1</Button> */}
          <Button type="dashed" onClick={Adds} block>useState +1</Button>
        </Panel>

        {/* useEffect hooks */}
        <Panel style={{ fontSize: 26 }} header="useEffect" key="4">
          <div>{count}</div>
          {/* 简写 */}
          <Button type="dashed" onClick={unmount} block>卸载组件</Button>
        </Panel>

        {/* useRef hooks */}
        <Panel style={{ fontSize: 26 }} header="useRef" key="5">
          <input type="text" ref={showList} />
          {/* 简写 */}
          <Button type="dashed" onClick={showToast} block>展示useRef数据</Button>
        </Panel>


      </Collapse>

      {/* 右侧隐藏数据 */}
      <Drawer title="React Hool/Hooks是什么?" placement="right" onClose={onClose} open={open}>
        <div style={{ fontSize: 26 }}>useState()</div>
        <p>1. Hook 是 React 16.8版本新加的新特性/新语法</p>
        <p>3. 可以在函数组卷中使用state 以及其他的 React 特性</p>
        <br />

        <div style={{ fontSize: 26 }}>useRef()</div>
        <p>获取原生Dom对象</p>
        <p></p>
        <p>Some contents...</p>
      </Drawer>

    </div>
  )
}


export default HooksCom
