import { Button, message, Empty } from 'antd'
import { useState } from 'react'
import { request, history, useRequest } from 'umi'

export default function Request() {
    const [value, setV] = useState([
        { id: 1, name: "信息一" },
        { id: 2, name: "信息二" }
    ])

    // -----------------------------------------------------------------------------------------------------------------------
    //  request 方法
    //   获取数据
    const getDate = async () => {
        // request 直接从umi中获取  得到的结果 直接就是可以用的数据
        const res = await request('/umi/goods')
        console.log(res)
        setV(res)
    }
    //   登录
    const Login = async () => {
        // 有参数版本 第一个参数填接口地址 第二个参数为对象形式 包含 method：请求方法，以及data对象，包含需要传的参数
        const res = await request('/umi/login', {
            method: 'post',
            data: {
                username: 'admin',
                password: '123456'
            }
        })
        console.log(res)
        if (res.err == 0) {
            message.success('登录成功即将跳转首页', 3);
            setTimeout(() => {
                history.push('/home/menuhome/versions')
            }, 3000);
        } else {
            message.error('登录信息有误，请重新登陆', 3);
        }
    }


    // -----------------------------------------------------------------------------------------------------------------------
    //  useRequest 方法   默认 在页面加载的时候自动获取数据
    // const { data, error, loading } = useRequest('/umi/goodss')

    //  通过manual 参数  手动 获取数据   后面 加一个参数 run(必须是run 别的会报错)， 然后在下方 标签上绑定事件 写入 run函数
    const { data, error, loading ,run} = useRequest({
        url: '/umi/login',
        method: 'post',
        data: {
            username: 'admin',
            password: '123456'
            }
        },
        {
            manual: true,  //手动通过一个 方法 来执行 调用此接口
        }
    )

    // 轮询 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     const { data, error, loading } = useRequest({
    //     url: '/umi/goods',
    //     method: 'post',
    //     params:{ }    //里面传递一个参数 随着每次轮询都增加或减少 来获取不去同参数下的接口数据
    //     },
    //     {
    //         manual: true,  //手动通过一个 方法 来执行 调用此接口
    //         pollingInterval:1000,  //轮询  1s读取一次
    //         pollingWhenHidden:false, //屏幕不可见时 停止轮询
    //     }
    // )

    // 如果报错 返回 下方 错误信息 这个组件
    if (error) {
        return <div>错误信息：</div>
    }
    // 如果数据还没拿到 返回 下方 loading 这个组件
    if (loading) {
        return <Empty description={false} />
    }

    // 正常情况下 直接返回下方组件
    return (
        <div className='box'>
            <div style={{ fontSize: 30, textAlign: "center" }}>request请求</div>

            <Button type='dashed' onClick={getDate} block style={{ height: 50, background: '#c3c2d7' }}>请求数据</Button>
            <br />
            <br />
            <Button type='dashed' onClick={Login} block style={{ height: 50, background: '#c3c2d7' }}>request登录</Button>
            <br />
            <br />
            <ul>
                {
                    value.map((item) => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })
                }
            </ul>

            <br />
            <br />
            <div style={{ fontSize: 30, textAlign: "center" }}>useRequest请求</div>
            <Button type='dashed' onClick={run} block style={{ height: 50, background: '#c3c2d7' }}>useRequest登录</Button>
            <div style={{ fontSize: 24 }}>goodss数据:{JSON.stringify(data)}</div>


        </div>
    )
}
