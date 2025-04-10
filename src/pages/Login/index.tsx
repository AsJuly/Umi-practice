import { Button, Input, message } from 'antd';
import { request, history } from 'umi';
import initLoginBg from './init';  //星空背景
import styles from './index.less'
import { Component, ReactNode, useEffect, useState } from 'react';
// 引入本地静态资源
// import four from "../../assets/images/four.jpg"
// {/* <img src={four} alt="" /> */}


// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{height:50}}>欢迎来到登录页</h1>
//         <Button type="primary" block><NavLink to="/">登录</NavLink></Button>
//       </div>
//     )
//   }
// }

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(()=>{
  //   initLoginBg()  //canvas星空背景
  //   window.onresize = function(){ initLoginBg() }
  //   return(()=>{
  //     //相当于 componentdidmount  //卸载生命周期
  //   })
  // },[])

  // 用户名
  const changeName = (e: any) => { setUsername(e.target.value) }
  // 密码
  const changePass = (e: any) => { setPassword(e.target.value) }

  // 登录
  const Loging = async () => {
    console.log(username, password)
    const res = await request('/umi/login', {
      method: 'post',
      data: {
        username,
        password
      }
    })
    console.log(res)
    if (res.err == 0) {
      message.success('登录成功', 2);
      setTimeout(() => {
        history.push('/home/menuhome/versions')
      }, 1500);
    } else {

      message.error('用户信息有误 请重新输入', 3);
    }
  }


  // 回车登录
  const Logs = async (e: { keyCode: number; }) => {
    // 判断是否按了回车键 回车登录
    if (e.keyCode === 13) {
      Loging()
    }
  }

  return (
    <div onKeyDown={Logs} >
      <div className={styles.Box_log}>
        {/* <canvas id='canvas'  className={styles.Box_log}></canvas> */}
        <div className={styles.form}>
          <h1>登录</h1>

          <div className={styles.username}>
            <div className={styles.text}>用户名</div>
            <Input placeholder="请输入用户名" onChange={changeName} className={styles.input} />
          </div>

          <div className={styles.password}>
            <div className={styles.text}>密码</div>
            <Input.Password placeholder="密码" onChange={changePass} className={styles.input} />
          </div>

          <Button type='primary' onClick={Loging} block className={styles.btn}>登录</Button>
        </div>
      </div>
    </div>
  )
}




export default Login
