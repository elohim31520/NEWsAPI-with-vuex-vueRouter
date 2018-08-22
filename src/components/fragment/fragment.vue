<template lang='pug'>
    router-link.nav-wrapper(tag='div',:to='nav')
        h1 {{nav}}
</template>

<script>
export default {
    props:['nav']
}
</script>

<style lang='sass'>
    .nav-wrapper
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
        &:hover
            background-color: #fff
            h1
                color: #010101


        h1
            margin: 0
            color: #fff
            line-height: 20px
</style>
