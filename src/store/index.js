// 引入 vue
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'
// 引入 state
import state from './state'
// 引入 mutations
import mutations from './mutations'

// vuex 是 vue 的插件，故应该在vue上使用它
Vue.use(Vuex)

// 导出的不是 vue，而是 vuex 所创建的一个仓库
export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     // 借助参数 ctx 可以拿到 commit 方法，将数据传递到 mutations 里面
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})
