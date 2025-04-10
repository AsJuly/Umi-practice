// import { history } from "umi"
// import { Button } from "antd"
// export default function Programme() {
//   // 跳转路由组件
//   function geRoute(){
//     history.push('/home/menuhome/routes')
//   }
//   return (
//     <div>
//       <div style={{fontSize:30,textAlign:"center"}}>编程式传参</div>

//         {/* 路由地址内传参 */}
//       <Button type="dashed" onClick={geRoute} block style={{backgroundColor:'#D1EFA5'}}>
//         Params传值
//       </Button>

//     </div>
//   )
// }


//   // 或者不引用 在 函数内获取history

// import { Button } from "antd"
// export default function Programme(history: string[]) {
//   function geRoute(){
//     history.push('/home/menuhome/routes')
//   }
//   return (
//     <div>
//       <div style={{fontSize:30,textAlign:"center"}}>编程式传参</div>

//         {/* 路由地址内传参 */}
//       <Button type="dashed" onClick={geRoute} block style={{backgroundColor:'#D1EFA5'}}>
//         Params传值
//       </Button>

//     </div>
//   )
// }


// 或者引用 useHistory 这个hooks

import { useHistory } from "umi"
import { Button } from "antd"
export default function Programme() {
  const history = useHistory()
  // 跳转路由组件
  const geRoute = ()=>{
    // params传参
    // history.push('/home/menuhome/routes/666')

    // query 传参
    history.push({
      pathname:'/home/menuhome/routes',
      query: {id : 66}
    })
  }
  return (
    <div className='box'>
      <div style={{fontSize:30,textAlign:"center"}}>编程式传参</div>

        {/* 路由地址内传参 */}
      <Button type="dashed" onClick={geRoute} block style={{backgroundColor:'#D1EFA5'}}>
        Params传值
      </Button>

    </div>
  )
}
