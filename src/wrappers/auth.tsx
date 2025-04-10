import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Redirect } from 'umi'

export default (propos: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  const num= Math.random()
  // 可以 在这里 进行参数判断 是否有 token 已登录 等等 若没有 则跳转登录
  if (num > 1) {
    console.log(num)
    // 在此处 写逻辑判断  比方说 token  等等 在进入首页之前判断是否有权限跳转首页
    return <Redirect to="/home/menuhome/versions" />;
  } else {
    console.log(num)
    return <Redirect to="/login" />;
  }
}