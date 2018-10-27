<template>
    <!-- template 里只能暴露一个根标签 -->
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommand></home-recommand>
      <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommand from '../components/Recommand'
import HomeWeekend from '../components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekendP
  }
}
</script>

<style></style>
