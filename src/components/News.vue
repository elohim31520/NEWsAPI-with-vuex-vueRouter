<template lang='pug'>
    .article-wrapper
        .content
        .input-wrapper
            input(type="text" ,placeholder='Serch...' )
            Card
</template>

<script>
import Card from './components/Card';

export default {
    computed:{
        ...mapState(['post']),
    }
}
</script>

<style lang='sass'>

</style>
