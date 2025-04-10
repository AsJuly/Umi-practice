import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';
// import px2vw from "postcss-px-to-viewport";

// import proxy from './proxy';  //反向代理
export default defineConfig({
  nodeModulesTransform: {
    //目录下依赖文件
    type: 'none', //all 慢 但兼容性好  none 快 兼容性一般
  },
  // proxy,  //配置代理
  request: {
    //配置request 返回结果的格式
    dataField: '', //因为如果使用useRequest 这个hooks时，它强制需要返回的结果中含有data
  },
  // layout: {
  //   // 支持任何不需要 dom 的
  //   // https://procomponents.ant.design/components/layout#prolayout
  //   name: 'Umi3 练习',
  //   locale: true,
  //   layout: 'side',
  // },
  routes,
  fastRefresh: {}, //快速刷新 可以保持组件状态，同时编辑提供
  //   devServer:{
  //     port:6666,     //.env里面权限更高一些   配置本地地址
  //     // https:true    //启用 https 安全访问 于对应协议服务器通讯
  //   },
  title: 'Umi3练习', //配置标题
  links: [{ rel: 'icon', href: '/img/favicon.ico' }],
  //   favicon:''    //若要使用本地图片 需要放在public里面
  dynamicImport: {
    //应用按需加载  如果 未加载完成 会先显示此组件
    loading: '@/components/Loading/Loading.tsx',
  },
  //   mountElementId:'app', //指定react app  渲染到 HTML 元素 id
  theme, //公共样式
//   extraPostCSSPlugins: [
//     px2vw({
//       unitToConvert: "px", //需要转换的单位，默认为"px"；
//       viewportWidth: 375, //设计稿的视口宽度
//       unitPrecision: 5, //单位转换后保留的小数位数
//       propList: ["*"], //要进行转换的属性列表,*表示匹配所有,!表示不转换
//       viewportUnit: "vw", //转换后的视口单位
//       fontViewportUnit: "vw", //转换后字体使用的视口单位
//       selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
//       minPixelValue: 1, //设置最小的转换数值
//       mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
//       replace: true, //是否直接更换属性值，而不添加备用属性
//       // exclude: [/node_modules/], //忽略某些文件夹下的文件
//       landscape: false,
//   }),
// ]

})
