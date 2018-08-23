<template lang='pug'>
    .card-news
        a(:href="toThePage", title="title")
        .news-img(:style='bgImg')
        .new-desc
            h3 {{news.title}}
            //- p {{news.source.name}}
            p {{news.short_description}}
            p.time {{news.publishedAt || news.updated_at}}

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
            return {
                'background-image': 'linear-gradient(-45deg,#FFE18D 10%,#FFE18D 10%,#FFDA71 10%,#FFDA71 40%,#FFE18D 40%,#FFE18D 60%,#FFDA71 60%,#FFDA71 90%,#FFE18D 90%,#FFE18D 100%',
                'background-size': '46px 46px'
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

$color_yellow: #FFE18D
$color_dark_yellow: #FFDA71

.card-news
    +size(270px,380px)
    // min-height: 305px
    box-sizing: border-box
    margin: 1rem
    cursor: pointer
    transition: 0.5s
    border-bottom: 3px solid #555
    background-color: #fff
    margin-bottom: 5rem
    position: relative
    border-radius: 5px
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: space-around
    box-shadow: 0 0 10px rgba(black,0.2)


    &:hover
        transform: translateY(-5px)

    a
        +size(100%)
        position: absolute

    .news-img
        flex: 0 0 40%
        background-size: 100%
        transition: 0.5s
        background-size: cover
        &:hover
            background-size: 115% auto
            transition: all 0.5s ease-in-out 

    .new-desc
        padding: 1rem
        flex: 1

        h3
            margin: 0
        
        .time
            font-size: 10px

        
</style>
