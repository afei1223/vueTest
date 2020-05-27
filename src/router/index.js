import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import hola from '@/views/hola'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hola',
      component: hola
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
