<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :list="hotCities"
             :all="allCities"
             :letter="letter"></city-list>
    <city-alphabet :all="allCities"
                  @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
// 利用 axios 进行页面 Ajax数据渲染
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      allCities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.allCities = data.cities
      }
      console.log(res)
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
