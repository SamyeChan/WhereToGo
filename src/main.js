// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 即 import App from './App.vue' （查找顺序：vue、js、json...）
import App from './App'
import router from './router'
// 引入 fastClick 库，解决移动端的300ms点击延迟问题
import fastClick from 'fastclick'
// 引入 vue-awesome-swiper 插件，实现轮播图功能
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入 reset.css 使样式统一
import 'styles/reset.css'
// 引入 border.css 解决多倍屏中，1像素边框会被显示成多像素问题
import 'styles/border.css'
// 引入 iconfont 文件
import 'styles/iconfont.css'
// 引入 swiper 文件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
// 在vue中使用 vue-awesome-swiper 插件（全局注册）
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */

// main.js中的挂载点存在于index.js中
new Vue({
  el: '#app',
  // router 路由就是根据网址的不同，返回不同的内容给用户（实际 - router: router）
  router,
  // 此处的 APP 是ES6的写法（ES6中，若键、值一致，则可合并），亦即 components: { App: App }
  components: { App },
  // 将局部组件App渲染出来（App从外部导入，ES6的 import）
  template: '<App/>'
})
