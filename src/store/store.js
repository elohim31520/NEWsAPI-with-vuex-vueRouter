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
        zshareData: {}
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
        }
    },
    actions: {
        loadData(context){
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${MYKEY}`).then((res)=>{
                context.commit("setPost", res.data);
            })

            axios.get("http://awiclass.monoame.com/api/command.php?type=get&name=hahowdata").then((res)=>{
                context.commit("setHahowData", res.data);
            })
            
            axios.get("https://awiclass.monoame.com/api/command.php?type=get&name=post").then((res)=>{
                context.commit("setZshareData", res.data);
            })
        }
    }  
});

export default store