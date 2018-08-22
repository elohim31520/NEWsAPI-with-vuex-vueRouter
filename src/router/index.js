import Vue from 'vue'
import Router from 'vue-router'
import News from '../components/News'
import Zshare from '../components/Zshare'
import Hahow from '../components/Hahow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/zshare',
      name: 'Zshare',
      component: Zshare,
    },
    {
      path: '/hahow',
      name: 'Hahow',
      component: Hahow,
    },
  ]
})
