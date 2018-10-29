import Vue from 'vue'
import Router from 'vue-router'
// @ 指 src 目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

// 导出一组路由配置项
export default new Router({
  routes: [{
    // 当用户访问根路径，给用户展示 Home 组件
    path: '/',
    name: 'Home',
    component: Home
  }, {
    // 设置一个新路由项
    path: '/city',
    name: 'City',
    component: City
  }]
})
