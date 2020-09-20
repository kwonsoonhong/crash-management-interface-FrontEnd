import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Crash from '../components/Crash.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    meta: {
        title: "Sejong"
    },
    routes: [
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/crash',
            name:'crash',
            component: Crash
        },

    ]
})