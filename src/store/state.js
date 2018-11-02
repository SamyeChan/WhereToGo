let defaultCity = '珠海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  // 默认城市为 珠海（看作state区域）
  // 城市优先在当前 localStorage 找
  city: defaultCity
}
