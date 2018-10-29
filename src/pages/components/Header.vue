<template>
    <!-- template 里只能暴露一个根标签 -->
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市景点/游玩主题</div>
                           <!-- this.city 使用数据 -->
        <router-link to="/city">
            <div class="header-right">{{ this.city }}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  // props 接收数据
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
// 1 rem = html font-size

@import '~styles/varibles.styl'
.header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        background: #ffffff
        border-radius: .1rem
        color: #ccc
    .header-right
        width: 1.24rem
        float: right
        text-align: center
        color #ffffff
        .arrow-icon
            margin-left: -.04rem
            font-size: .24rem

</style>
