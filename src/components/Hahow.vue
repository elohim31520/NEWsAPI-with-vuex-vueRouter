<template lang='pug'>
    .hahow-wrapper
        .header
        SerchLine
        .card-list
            Card_hahow(v-for='data in hahowData', :key='data._id' ,:data='data')
</template>

<script>
import {mapState} from 'vuex';
import Card_hahow from './Card_hahow';
import SerchLine from './fragment/SearchLine';

export default {
    components:{
            Card_hahow,
            SerchLine
    },
    computed: {
        ...mapState(['hahowData']),
    }
}
</script>

<style lang='sass'>

@mixin size($w ,$h:$w)
    width: $w
    height: $h

$color_yellow: #FFE18D
$color_dark_yellow: #FFDA71

.hahow-wrapper
    +size(100%)

    .header
        +size(100%, 400px)
        background: linear-gradient(-45deg,$color_yellow 10%,$color_yellow 10%,$color_dark_yellow 10%,$color_dark_yellow 40%,$color_yellow 40%,$color_yellow 60%,$color_dark_yellow 60%,$color_dark_yellow 90%,$color_yellow 90%,$color_yellow 100%)
        background-size: 46px 46px
        margin-bottom: 10rem

    .card-list
        display: flex
        flex-wrap: wrap
</style>
