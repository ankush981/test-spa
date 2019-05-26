import Vue from 'vue'
import Router from 'vue-router'
import Intro from './components/Intro'
import Surrender from './components/Surrender'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Intro
        },

        {
            path: '/surrender',
            name: 'surrender',
            component: Surrender
        },
    ]
})
