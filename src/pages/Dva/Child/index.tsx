import { useDispatch, useSelector } from "umi"
import { Button } from 'antd';

// useDispatch  获取 全局或者页面级 的 函数 可以调用
// useSelector  
export default function Child() {
    const dispatch = useDispatch()
    // const { dva } = useSelector((state: { dva: string }) => ({ dva: state.dva }))
    const { title } = useSelector((state: {
        global: any; title: string 
}) => ({ title: state.global.title }))


    // 用 uesDispatch 获取 global上的函数 改变数据
    const toTxt = () => {
        dispatch({
            type: 'global/setTitle',
            payload: {
                a: 111,
                b: 222
            }
        })
    }
    return (
        <div>
            <div style={{ fontSize: 24 }}>{title}</div>
            <Button type='dashed' onClick={toTxt} block style={{ height: 50, background: '#c3c2d7' }}>改变全局global中的数据</Button>

        </div>
    )
}
