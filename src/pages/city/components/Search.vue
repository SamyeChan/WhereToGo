<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或d拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus">
@import '~styles/varibles.styl';
// 编写css时不用写产商前缀，因为 stylus 在打包的时候会自动添加
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
  }
}
</style>
