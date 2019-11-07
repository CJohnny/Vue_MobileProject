// 入口文件
import Vue from 'vue'

// 导入 App 组件
import app from './App.vue'
import {Header} from 'mint-ui'

// 导入 mui 样式
import './lib/mui/css/mui.min.css'

Vue.component(Header.name,Header)

var vm = new Vue({
  el: "#app",
  data: {},
  render: c => c(app)
})