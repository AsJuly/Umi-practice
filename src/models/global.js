import { request } from 'umi';
import key from 'keymaster'
export default {
  // namespace:'global',  //所有models 里面的 namespace 不能重名

  // 初始化 全局数据  存放公共数据
  state: {
    title: '全局title',
    text: '全局text',
    login: false,
    a: '企业级必学前端框架Umi3教程来啦，Umi是蚂蚁金服的底层前端框架，同事都在用、学员都在学',
  },

  // 处理同步业务
  reducers: {
    // 此处可以接收到 state 里面的全部参数

    // 修改初始化的标题
    setText(state) {
      // copy更新并返回
      return {
        ...state,
        text: '全局设置后的 text' + Math.random().toFixed(2),
      };
    },

    setTitle(state, action) {
      // action 接收到的参数
      return {
        ...state,
        title: `全局设置后的 title${action.payload.a}/${action.payload.b}`,
      };
    },
    // 改变 登录状态 login
    signin: (state, action) => ({
      ...state,
      login: true,
    }),
  },

  //   处理 异步业务
  effects: {
    // call 意为执行异步函数
    // put  代表 发出一个 action
    // select 表示从state中 获取一些数据
    // yield  类似 await   相当于 同步书写异步的代码
    // 函数前 必须 加 *
    *login(action, { call, put, select }) {
      const data = yield call(request, '/umi/login', {
        method: 'post',
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      yield put({
        type: 'signin',
        payload: data,
      });
    },
  },

  //   subscriptions   监听作用  订阅
  subscriptions: {
    // 自定义函数

    // 监听路由 跳转
    listenRoute({ dispatch, history }) {
      // 可以带参数 dispatch 和 自带的 history方法等等
      history.listen(({ pathname, query }) => {
        console.log('当前所在路由:' + pathname, '传递的参数:' + query);
      });
    },

    // // 监听 键盘事件
    listenKeyboard({dispatch}) {
      key('ctrl + i', () => {
        // 触发后执行 setText 函数  改变 text数据
        dispatch({ type: 'setText' });
      });

    },

    // 监听 浏览器窗口变化
    listenResize() {
      window.onresize = function () {
        const value = window.innerWidth;
        console.log('浏览器窗口变化了,当前为:' + value);
      };
    },

    // 监听 滚动条的状态
    listenScroll(){
        window.onscroll = function(){
            console.log('我滚了...')
        }
    }
  },
};
