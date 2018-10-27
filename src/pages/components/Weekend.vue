<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item"
         v-for="item of weekendList"
         :key="item.id">
        <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
        title: '金沙洲天空之眼摩天轮',
        desc: '吃葡萄不吐葡萄皮不吃葡萄到吐葡萄皮'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1508/f8/cadd4e229d3402.jpg_r_640x214_c38fb221.jpg',
        title: '金沙洲天空之眼摩天轮',
        desc: '吃葡萄不吐葡萄皮不吃葡萄到吐葡萄皮'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
        title: '金沙洲天空之眼摩天轮',
        desc: '吃葡萄不吐葡萄皮不吃葡萄到吐葡萄皮'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    flex 1
    padding .19rem .14rem
    min-width 0
    .item-title
      line-height .48rem
      font-size .28rem
      ellipsis()
    .item-desc
      line-height .42rem
      font-size .24rem
      color #616161
      ellipsis()
    .item-btn
      line-height .44rem
      margin-top .2rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #ffffff
</style>
