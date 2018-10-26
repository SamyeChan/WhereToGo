<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList"
                     :key="item.id">
            <img class="swiper-img"
                 :src="item.imgUrl"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 状态点
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
      // 数组导向控制轮播页面数量
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/e2/2e3774e52b380102.jpg_750x200_14e6ebab.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
//   overflow: hidden
//   width: 100%
//   // 若在height中写%，则其是相对于父级元素而言的
//   height: 0
//   // wrapper的高度会相对于它的宽度(width100%)自动撑开31.25% - 实现宽高比始终为31.25的效果
//   padding-bottom: 31.25%
  width: 100%
  // 相对于视口而言的31.25
  height: 26.65vw
  background-color: #E6E6FA
  .swiper-img
      width: 100%
</style>
