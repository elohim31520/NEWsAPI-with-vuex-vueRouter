import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import MYKEY from '../.env'

Vue.use(Vuex)

// http://awiclass.monoame.com/api/command.php?type=get&name=hahowdata hahowAPI

const store = new Vuex.Store({
    state: {
        navigation: ['News','Zshare','Hahow'],
        post:{},
        hahowData:{},
        zshareData: {},
        bitcoin_data: {},
        apple_data:{}
    },
    mutations: {
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
        }
    },
    actions: {
        loadData(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${MYKEY}`).then((res)=>{
                context.commit("setPost", res.data);
            });

            axios.get("http://awiclass.monoame.com/api/command.php?type=get&name=hahowdata").then((res)=>{
                context.commit("setHahowData", res.data);
            });
            
            axios.get("https://awiclass.monoame.com/api/command.php?type=get&name=post").then((res)=>{
                context.commit("setZshareData", res.data);
            });

            axios.get(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${MYKEY}`).then((res)=>{
                context.commit("setbitcoin_data", res.data);
            });

            axios.get(`https://newsapi.org/v2/everything?q=apple&from=2018-08-22&to=2018-08-22&sortBy=popularity&apiKey=${MYKEY}`).then((res)=>{
                context.commit("set_apple_data", res.data);
            });
        }
    }  
});

export default store