// 入口文件
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入 App 组件
import app from './App.vue'
import { Header } from 'mint-ui'

// 导入 mui 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)


// 导入项目的路由模块
import router from './router.js'

var vm = new Vue({
  el: "#app",
  data: {},
  render: c => c(app),
  router  //挂载路由到vm实例上
})