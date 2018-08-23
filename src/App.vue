<template lang='pug'>
  #app
    .nav-sidebar
      .logo-main
      .nav-main
        router-link.nav-item(to="/news") News
        router-link.nav-item(to="/zshare") Zshare
        router-link.nav-item(to="/hahow") Hahow
        router-link.nav-item(to="/bitcoin") Bitcoin
        router-link.nav-item(to="/apple") Apple
        router-link.nav-item(to="/tech") Tech
    .view
      .view-wrapper    
        router-view

</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';
import News from './components/News'


export default {
  name: 'App',
  components:{

  },
  computed:{
      ...mapState(['post','navigation'])
  },
  // methods:{
  //   toThePage(index){
  //     console.log(index)
  //     this.$router.push({
  //       path: post.articles[index].url
  //     })
  //   }
  // }
}
</script>

<style lang='sass'>
*
    font-family: '微軟正黑體'

@mixin size($w ,$h:$w)
    width: $w
    height: $h


html,body
  margin: 0
  padding: 0
#app
  height: 100vh
  font-family: 'Avenir', Helvetica, Arial, sans-serif, '微軟正黑體'
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  display: flex
  flex-wrap: wrap

  .nav-sidebar
    flex: 0 0 350px
    height: 100%
    // position: fixed  踩坑-不需用fixed也能設定固定，父層用100vh,右側要scroll 就設定 overflow: auto
    display: flex
    justify-content: space-between
    flex-direction: column
    background-color: #fff

    .logo-main
      +size(250px)
      background-image: url('https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/a/ab/Wolf_roar_transparent_background_by_treebuzza-d6wptvi_%281%29.png/revision/latest/scale-to-width-down/618?cb=20161031174547')
      background-size: 100% 
      background-repeat: no-repeat
      
      


    .nav-main
      color: #eee

      .nav-item
        width: 100%
        height: 6rem
        background-color: #010101
        border-bottom: 1px solid #eee
        box-sizing: border-box
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        transition: 0.5s
        font-size: 2rem
        text-decoration: none
        color: #eee
        &:hover
            background-color: #fff
            color: #010101
      .router-link-active
        color: #eee
        background-color: #1161ef

  .view
    width: 100%
    flex: 1
    display: flex
    justify-content: center
    background-color: #f2f2f2
    overflow: auto

    .view-wrapper
      max-width: 930px
</style>
