<template lang='pug'>
    .article-wrapper
        .content
            SerchLine
            Card(v-for='(news,i) in post.articles' ,:key='i' ,:news='news' )

</template>

<script>
import Card from './Card';
import {mapState} from 'vuex';
import SerchLine from './fragment/SearchLine';

export default {
    computed:{
        ...mapState(['post']),
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
.article-wrapper
    +size(100%)
    .content
        max-width: 930px
        width: 70%
        display: flex
        flex-wrap: wrap
        margin-top: 10rem
</style>
