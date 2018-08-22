<template lang='pug'>
    .card-news
        a(:href="toThePage", title="title")
        .news-img(:style='bgImg')
        .new-desc
            h3 {{news.title}}
            //- p {{news.source.name}}
            p {{news.publishedAt}}
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['post']),
        bgImg(){
            if(this.news.urlToImage){
                return {'background-image':  `url("${this.news.urlToImage}")`}
            }
            
        },

        toThePage(){
            if(this.news.url){
                return this.news.url
            }
            return '/'
        }
    },
    props:{
        news:{
            type: Object,
            default: ''

        }
    }
}
</script>

<style lang='sass'>
@mixin size($w ,$h:$w)
    width: $w
    height: $h

.card-news
    +size(270px,305px)
    box-sizing: border-box
    margin: 1rem
    cursor: pointer
    transition: 0.5s
    border-bottom: 3px solid #555
    background-color: #fff
    margin-bottom: 5rem
    position: relative
    &:hover
        transform: translateY(-5px)

    a
        +size(100%)
        position: absolute

    .news-img
        +size(100%,40%)
        background-size: 100%
        transition: 0.5s 
        &:hover
            background-size: 115% auto
            transition: all 0.5s ease-in-out 

    .new-desc
        padding: 1rem

</style>
