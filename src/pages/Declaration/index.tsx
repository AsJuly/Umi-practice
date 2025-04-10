import { Link } from "umi"
import { Button } from "antd"
export default function Declaration() {
  return (
    <div className='box'>
      <div style={{fontSize:30,textAlign:"center"}}>声明式传参</div>

        {/* 路由地址内传参 */}
      <Button type="dashed" block style={{backgroundColor:'#D1EFA5'}}>
        <Link to="/home/menuhome/routes/666">Params传值</Link>
      </Button>
      <br />
      <br />

        {/* query传参 */}
      <Button type="dashed" block style={{backgroundColor:'#D1EFA5'}}>
        <Link to={{pathname:'/home/menuhome/routes',query:{id:12138}}}>query传参</Link>
      </Button>
<br />
      <br />

       {/* search传参 */}
       <Button type="dashed" block style={{backgroundColor:'#D1EFA5'}}>
        <Link to={{pathname:'/home/menuhome/routes',search:'?id=3435354'}}>search传参</Link>
      </Button>
    </div>
  )
}
