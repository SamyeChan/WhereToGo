<template>
    <!-- template 里只能暴露一个根标签 -->
    <div>
    <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from '../components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style></style>
