<template lang='pug'>
  #app
    .nav-sidebar
      .logo-main
      .nav-main
        Fragment(v-for='(nav,i) in navigation' ,:key='i' ,:nav='nav')
    .view
      .content
        .input-wrapper
          input(type="text" ,placeholder='Serch...' )
        Card(v-for='(news,i) in post.articles' ,:key='i' ,:news='news' )
        router-view

</template>

<script>
import Card from './components/Card'
import axios from 'axios'
import {mapState} from 'vuex'
import Fragment from './components/fragment/fragment'


export default {
  name: 'App',
  components:{
    Card,
    Fragment
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

  .view
    flex: 1
    display: flex
    flex-wrap: wrap
    justify-content: center
    background-color: #f2f2f2
    overflow: auto
    

    .content
      max-width: 930px
      width: 70%
      display: flex
      flex-wrap: wrap
      margin-top: 10rem

    .input-wrapper
      +size(100%,10%)
    
      input
        +size(60%,2rem)
        // margin-bottom: 10rem
        outline: none
        border-radius: 10px
        background-color: 
        padding-left: 10px
        border: none
</style>
