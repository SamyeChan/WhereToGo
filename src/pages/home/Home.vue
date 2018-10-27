<template>
    <!-- template 里只能暴露一个根标签 -->
    <div>
      <!-- 父组件属性传值（将自己的city传递到子组件上） -->
      <home-header :city="city"></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommand :list="recommandList"></home-recommand>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommand from '../components/Recommand'
import HomeWeekend from '../components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  data () {
    return {
      // 定义一个变量 city 去传值
      city: '',
      swiperList: [],
      iconList: [],
      recommandList: [],
      weekendList: []
    }
  },
  methods: {
    // 页面挂载好后去获取数据
    getHomeInfo () {
      // 请求的是 api ，但实际获取的是转发路径后的文件夹
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    // 成功获取数据，执行语句（输出）
    getHomeInfoSucc (res) {
      // 在页面上获取 Ajax数据内容
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommandList = data.recommandList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    // 让页面挂载好以后去执行 getHomeInfo函数（帮助获取 Ajax数据）
    this.getHomeInfo()
  }
}
</script>

<style></style>
