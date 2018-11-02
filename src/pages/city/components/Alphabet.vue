<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
    {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphbet',
  props: {
    // 这时的数据是一个对象啊
    all: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.all) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      // 是否可向下拖动状态
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 数据被更新，并且页面完成了自身渲染之时执行
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  /*
  （当初次渲染 Alphabet.vue 时，是用其父组件中的初始值来加载的，即用的空值，其并不会被渲染出来，
  是在 City.vue 获取到Ajax数据后，Alphabet.vue 才被渲染出来；
  而当 Alphabet.vue 数据有更新并重新渲染之后，这个 update() 生命周期钩子才被执行）
  */
  methods: {
    // 当点击时可以获得一个事件对象 e
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 首字母 A 距离顶部的高度（offsetTop：拿到一个元素距离搜索框底部、List顶部的高度）
        // （但每一次都需要重新计算着 -- 性能低）
        // const startY = this.$refs['A'][0].offsetTop
        // 问题：在页面滚动的时候，会在短时间内触发多次绑定事件；解决：设置一个流函数
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 事件对象 e 的一个函数 touches 中的首项（0）可以取得当前用户手指触摸位置（手指距离最顶部高度）
          const touchY = e.touches[0].clientY - 79
          // 计算得出手指划到的下标
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
    line-height .38rem
    text-align center
    color $bgColor
</style>
