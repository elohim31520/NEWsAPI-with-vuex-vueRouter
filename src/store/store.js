import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import MYKEY from '../.env'

Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        post:{},
        hahowData:{},
        zshareData: {},
        bitcoin_data: {},
        apple_data:{},
        tech_data: {},
        searched_data:[],
        not_found_page: false
    },
    mutations: {
        mutate_filter_post(state,keyword){
            let temp_post = [];

            // 跑title
            state[keyword[1]].articles.forEach(article=>{
                let flag = false
                
                if(article.title.toLowerCase().indexOf(keyword[0].toLowerCase())!=-1){
                    flag = true 
                    if(flag){
                        temp_post.push(article)
                    }
                }    
            });   

            state.searched_data = temp_post ;
            // console.log(state.searched_data);

        },

        setPost(state,val){
            state.post = val;
        },
        setHahowData(state,val){
            state.hahowData = val;
        },
        setZshareData(state,val){
            state.zshareData = val;
        },
        setbitcoin_data(state,val){
            state.bitcoin_data = val;
        },
        set_apple_data(state,val){
            state.apple_data = val;
        },
        set_tech_data(state,val){
            state.tech_data = val;
        }
    },
    actions: {
        loadData(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${MYKEY}`).then((res)=>{
                context.commit("setPost", res.data);
            }).catch(err=> console.log(err));

            axios.get("http://awiclass.monoame.com/api/command.php?type=get&name=hahowdata").then((res)=>{
                context.commit("setHahowData", res.data);
            }).catch(err=> console.log(err));
            
            axios.get("https://awiclass.monoame.com/api/command.php?type=get&name=post").then((res)=>{
                context.commit("setZshareData", res.data);
            }).catch(err=> console.log(err));

            axios.get(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${MYKEY}`).then((res)=>{
                context.commit("setbitcoin_data", res.data);
            }).catch(err=> console.log(err));

            axios.get(`https://newsapi.org/v2/everything?q=apple&from=2018-08-22&to=2018-08-22&sortBy=popularity&apiKey=${MYKEY}`).then((res)=>{
                context.commit("set_apple_data", res.data);
            }).catch(err=> console.log(err));

            axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${MYKEY}`).then((res)=>{
                context.commit("set_tech_data", res.data);
            }).catch(err=> console.log(err));
        }
    }  
});

export default store