<template lang='pug'>
    .input-wrapper
        input(type="text" ,placeholder='Serch...' )
</template>

<script>
export default {

}
</script>

<style lang='sass'>
@mixin size($w ,$h:$w)
    width: $w
    height: $h

.input-wrapper
    +size(100%,10%)
    display: flex
    justify-content: center
    margin-bottom: 3rem

    input
        +size(60%,2rem)
        // margin-bottom: 10rem
        outline: none
        border-radius: 10px
        background-color: 
        padding-left: 10px
        border: none
</style>
