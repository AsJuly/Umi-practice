export default {
  // 页面级别的 namespace
  namespace: 'dva',

  // 初始化 全局数据  存放公共数据
  state: 'Android',

  // 处理同步业务
  reducers: {
    // 此处可以接收到 state 里面的全部参数
    // 修改初始化的标题
    setStr(state: string) {
      return 'Ios';
    },
  },
}
