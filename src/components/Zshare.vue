<template lang='pug'>
    .zshare-wrapper
        .header
        .content-wrapper
            SerchLine
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
    display: flex
    flex-direction: column
    align-items: center

    .header
        +size(100%,305px)
        background-color: #010101

    .content-wrapper
        max-width: 930px
        width: 100%
        display: flex
        flex-wrap: wrap
        justify-content: center
</style>
