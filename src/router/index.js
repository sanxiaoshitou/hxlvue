import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home/home'
import Article from '../components/article/article'
import Video from '../components/video/video'
import Music from '../components/music/music'
import Library from '../components/library/library'

import yDetails from '../components/article/details/y_details'
import cbDetails from '../components/article/details/caibao_details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      name: 'index',
      redirect: 'home',
      children: [
        {path: 'home', component: Home},
        // {path: 'article', component: Article},
        {path: 'video', component: Video},
        {path: 'music', component: Music},
        {path: 'library', component: Library}
      ]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'index',
      redirect: 'article',
      children: [
        {path: 'article', component: Article},
        {path: 'yDetails', component: yDetails},
        {path: 'cbDetails', component: cbDetails}
      ]
    }
  ]
})
