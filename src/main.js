// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import resource from 'vue-resource'
Vue.use(resource)

Vue.config.productionTip = false

import 'animate.css'   
// 引用 Muse UI 
import MuseUI from 'muse-ui'
// 引用 Muse UI 样式文件
import 'muse-ui/dist/muse-ui.css'
// 安装至Vue
Vue.use(MuseUI)
// 使用 carbon 主题
//import 'muse-ui/dist/theme-carbon.css' 
// 加载默认主题
import theme from '@/assets/js/common/theme'
theme.loadTheme() 

import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.109:8082/Dedecms/uploads/api/index.php/webservices/';
// axios.defaults.baseURL = 'http://localhost:8082/Dedecms/uploads/api/index.php/webservices/';

// 引用图片预览插件
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


//引入store仓库
import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
