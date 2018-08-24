<template lang='pug'>
    .article-wrapper
        .content
            SerchLine(@relay='trigger_to_filter(arguments[0])')
            Card(v-for='(news,i) in post.articles' ,:key='i' ,:news='news' v-if='!temp_keywords')
            //- 如果下面的組件使用v-else ，也是會複製20筆，很雷
            Card(v-for='(news,i) in searched_data' ,:key='i' ,:news='news' v-if='temp_keywords') 


</template>

<script>
import Card from './Card';
import {mapState,mapMutations} from 'vuex';
import SerchLine from './fragment/SearchLine';

export default {
    data(){
        return{
            temp_keywords: ''
        
        }
    },
    mounted(){

    },
    computed:{
        ...mapState(['post','searched_data']),

        // filter_post(){
            // console.log(this.post.articles)
            // return this.post.articles.forEach(article=>{
            //     let flag = true;
            //     if(article.title.toLowerCase().indexOf(this.temp_keywords.toLowerCase())!=-1){
            //         flag = true 
            //     }
            //     return flag
            // });
        
            
        // }

    },
    components:{
        Card,
        SerchLine
    },
    methods:{
        ...mapMutations(['mutate_filter_post']),

        trigger_to_filter(arg){
            this.temp_keywords = arg;
            if(this.temp_keywords){
                this.mutate_filter_post([this.temp_keywords,'post'])
            }
            
        }


    }
}
</script>

<style lang='sass'>
@mixin size($w ,$h:$w)
    width: $w
    height: $h

.article-wrapper
    +size(100%)
    
    .content
        width: 100%
        display: flex
        flex-wrap: wrap
        margin-top: 10rem
</style>
