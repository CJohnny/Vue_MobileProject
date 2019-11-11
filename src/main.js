// 入口文件
import Vue from 'vue'

// 导入 App 组件
import app from './App.vue'
import {
  Header
} from 'mint-ui'

// 导入 mui 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入路由
import router from './router.js'

import {
  Swipe,
  SwipeItem
} from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueResource from 'vue-resource'


Vue.use(VueResource)

var vm = new Vue({
  el: "#app",
  data: {},
  render: c => c(app),
  router //路由挂载到vm对象上

})