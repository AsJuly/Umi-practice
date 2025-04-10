const UserModel = {
  namespace:'',    //唯一标识

  state:{},  //初始值

  // 其中 reducers effects subscriptions 中的函数都包含一个参数 但他们三个的参数不一样

  // 处理 同步数据
  reducers:{
    // 包含多个函数
    getList(state,action){
      // 其中state是 之前的 state中的数据
      // 需要返回一个 新的 newState数据
      // return newState
    }
  },

  // 处理 异步数据
  effects:{
    *Watch(action,effects){
      // yield put()
      //  一定要通过 yield put 返回页面数据 他的返回数据为 void
      // 不直接修改 state 由action 触发 可以触发 action  可以和服务器交互 获取全局state
    }
  },

  subscriptions:{
    changeList({ dispatch, history },done){

    }
  }
}

export default UserModel
