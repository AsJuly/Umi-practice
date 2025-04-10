import { Button } from 'antd'
import { useState } from 'react'

export default function Fetch() {
  const [value,setV] = useState([
    { id: 1, name: "信息一"},
    { id: 2, name: "信息二"}
  ])

  const getDate = async () => {
    // fetch 是自在的 直接使用 括号内传入接口地址
    const res = await fetch('/umi/goods')
    const data = await res.json()
    await setV(data)
    console.log(data)
    console.log(value)
  }
  return (
    <div className='box'>
      <div style={{ fontSize: 30, textAlign: "center" }}>fetch请求</div>

      <Button type='dashed' onClick={getDate} block style={{ height: 50, background: '#ccd9d7' }}>请求数据</Button>
      <ul>
        {
          value.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
