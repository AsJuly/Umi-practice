// import { useContext } from "react"
// import AppContext from "../Context"
// import { Button } from 'antd'

// export default function Son(){
//     const { count, setCount } = useContext(AppContext)
//     return (
//         <div>
//             <h3>子组件</h3>
//             <h4>{count}</h4>
//             {/* <h1>{values}</h1> */}
//             <Button type="primary" onClick={() => setCount(count + 1)} block>+1</Button>
//         </div>
//     )
// }


// memo 解决  父组件更新 子组件跟着更新的问题
// 是一个高阶组件 memo  判断 父亲在包含子类有的值 更新的情况下 更新 否则不更新 
import {memo} from 'react'

const Son=({updateCount})=>{
    const show =()=> console.log('child组件渲染')
    return (
        <div>
            <h3>子组件</h3>
            <div>{show()}</div>
            <h4>{updateCount}</h4>
        </div>
    )
}

export default memo(Son)

