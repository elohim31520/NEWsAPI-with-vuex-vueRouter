<template lang='pug'>
    .zshare-wrapper
        .header
        .content
            SerchLine(@relay='trigger_to_filter(arguments[0])')
            Card(v-for='(news,i) in zshareData' ,:key='news.id' ,:news='news' )


</template>

<script>
import Card from './Card';
import {mapState} from 'vuex';
import SerchLine from './fragment/SearchLine';

export default {

    computed:{
        ...mapState(['zshareData']),
    },
    components:{
        Card,
        SerchLine
    },
    
}
</script>

<style lang='sass'>
@mixin size($w ,$h:$w)
    width: $w
    height: $h

.zshare-wrapper
    +size(100%)
    
    
    

    .header
        +size(100%,400px)
        background-color: #010101
        background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/52504c55246443.597c79a51c9fc.jpg")
        background-size: cover
        margin-top: 3rem

    .content
        width: 100%
        display: flex
        flex-wrap: wrap
        margin-top: 10rem
</style>
