import { useLocation,useParams ,useRouteMatch,useHistory} from 'umi'

// useHistory 其中可以后却到一大堆，其中含有 loaction对象 里面包含 query 和 search
// useLocation  其中包含 pathname 和 query 和 search  search 使一个字符串 包含参数名
// useParams   其中 只包含 一个 params 参数 传递过来的 键值对  比如 {a:1}
// useRouteMatch  里面只包含 path url 和 params对象

export default function RouteTable() {
  console.log(useLocation())
  console.log(useParams())
  console.log(useRouteMatch())
  console.log(useHistory())
  const ss = useLocation().query.id

  //params传值
  const num = useParams()
  // search传值  不过是一个字符串形式
  const id = useLocation().search

  return (
    <div className='box'>
      <h1>路由</h1>
      <div style={{fontSize:30,color:'pink'}}>
        Search传来的参数:{id}
      </div>

      <div style={{fontSize:30,color:'pink'}}>
        Params传来的参数:{num.a}
      </div>
      <div style={{fontSize:30,color:'pink'}}>
        Query传来的参数:{ss}
      </div>
    </div>
  )
}
