<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>

  </div>
</template>

<script>
export default {
  name: 'CityAlphbet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item 
    line-height .44rem
    text-align center
    color $bgColor
</style>
