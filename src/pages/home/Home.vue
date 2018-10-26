<template>
    <!-- template 里只能暴露一个根标签 -->
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style></style>
