// .vue 为后缀的文件成为 单文件组件（实际放置了一个vue组件）

<template>
<!-- template 模板标签  -->
  <div id="app">
    <!-- router-view 显示的是当前路由地址所对应的内容（整个应用的根组件） -->
    <router-view/>
  </div>
</template>

<script>
// script 标签
export default {
  name: 'App'
}
</script>

<style>
/* style 标签 */
</style>
