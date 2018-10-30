<template>
<div>
  <div class="search">
    <input v-model="keyword"
           class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
  <!-- ref：取得的当前 DOM 结构 -->
  <div class="search-content"
       ref="search"
       v-show="keyword">
    <ul>
      <li class="sreach-item border-bottom"
          v-for="item of list"
          :key="item.id">
      {{ item.name }}
      </li>
      <!-- 无结果页面：当搜索结果数组 list为空时出现（v-show） -->
      <li class="sreach-item border-bottom"
         v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    all: Object
  },
  data () {
    return {
      // 定义一个搜索关键字
      keyword: '',
      // list 存储搜索结果
      list: [],
      // timer 节流
      timer: null
    }
  },
  computed: {
    // 判定无结果页面是否渲染
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    // 监听关键字变化
    keyword () {
      // 节流函数（需定义一个 timer）
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 若无搜索输入就将搜索结果置空，不要显示结果展示页面
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.all) {
          // 遍历每一个数据进行搜寻：indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置（无出现返回-1）
          this.all[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 将有出现的数据存入搜索结果的数组 result
              result.push(value)
            }
          })
        }
        // 将搜索结果赋于展示数组 list
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 实现局部页面滚动效果
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus">
@import '~styles/varibles.styl';
// 编写css时不用写产商前缀，因为 stylus 在打包的时候会自动添加
.search
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
.search-content
  overflow hidden
  z-index 1
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eeeeee
  .sreach-item
    line-height .62rem
    padding-left .2rem
    background #ffffff
    color #666
</style>
