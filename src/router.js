import Vue from 'vue'
import Router from 'vue-router'
import Intro from './components/Intro'
import Surrender from './components/Surrender'
import PickCategory from './components/PickCategory'
import Quiz from './components/quiz/Quiz'
import GameOver from './components/quiz/GameOver';

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

        {
            path: '/category',
            name: 'pick-category',
            component: PickCategory
        },

        {
            path: '/quiz',
            name: 'quiz',
            component: Quiz
        },

        {
            path: '/game-over',
            name: 'game-over',
            component: GameOver
        },
    ]
})
