import Vue from 'vue'
import Router from 'vue-router'
import NewPage from '@/pages/new-page/new-page.vue'
import MainPage from '../pages/main-page/main-page.vue'
import claimPage from '../pages/claim-page/claim-page'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/claim',
      name: 'claim-page',
      component: claimPage
    }
  ]
})
