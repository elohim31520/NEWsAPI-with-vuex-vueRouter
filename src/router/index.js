import Vue from 'vue'
import Router from 'vue-router'
import News from '../components/News'
import Zshare from '../components/Zshare'
import Hahow from '../components/Hahow'
import Bitcoin from '../components/Bitcoin'
import Apple from '../components/Apple'

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
    {
      path: '/bitcoin',
      name: 'Bitcoin',
      component: Bitcoin,
    },
    {
      path: '/apple',
      name: 'Apple',
      component: Apple,
    },
  ]
})
