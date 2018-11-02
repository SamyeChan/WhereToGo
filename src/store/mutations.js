export default {
  changeCity (state, city) {
    // 将公共数据 state 里面的 city 更改至当前传入，即当前点击的城市
    state.city = city
    // 在更改选定城市的同时保存该城市（记住它，下次就好找回它）
    localStorage.city = city
  }
}
