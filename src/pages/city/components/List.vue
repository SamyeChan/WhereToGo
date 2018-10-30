<template>
  <div class="list" ref="wrapper">
    <!-- 该 div 添加后即符合 better-scroll DOM 结构  -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">珠海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of list" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of all"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list"
             v-for="city of item"
                   :key="city.id">
          <div class="item border-bottom">{{ city.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 Better-scroll
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    list: Array,
    all: Object,
    letter: String
  },
  mounted () {
    // 创建一个 better-scroll 实例（实例创建时需要接收一个 DOM 元素获取器）
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  // 监听 letter 的变化
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
      // console.log(this.letter)
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
.border-bottom
  &:before
    border-color #ccc
.title
  line-height .54rem
  background #eeeeee
  padding-left .2rem
  color #666
  font-size .26rem
.button-list
  overflow hidden
  padding .1rem .6rem .1rem .1rem
  .button-wrapper
    float left
    width 33.33%
    .button
      margin .1rem
      padding .1rem 0
      text-align center
      border .02rem solid #ccc
      border-radius 3px
.item-list
  .item
    line-height .76rem
    color #666
    padding-left .2rem
</style>
