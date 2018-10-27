<template>
  <div class="recommand">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item"
         v-for="item of recommandList"
         :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  data () {
    return {
      recommandList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/df/df5938d61a0f8ab0a3.img.jpg_200x200_2b132f04.jpg',
        title: '金沙洲天空之眼摩天轮',
        desc: '吃葡萄不吐葡萄皮不吃葡萄到吐葡萄皮'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/df/df5938d61a0f8ab0a3.img.jpg_200x200_2b132f04.jpg',
        title: '金沙洲天空之眼摩天轮',
        desc: '吃葡萄不吐葡萄皮不吃葡萄到吐葡萄皮'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/df/df5938d61a0f8ab0a3.img.jpg_200x200_2b132f04.jpg',
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .16rem
    .item-info
      flex 1
      padding .19rem .14rem
      min-width 0
      .item-title
       line-height .54rem
       font-size .32rem
       ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-btn
        line-height .44rem
        margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #ffffff
</style>
