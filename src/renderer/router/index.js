import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login/Login.vue'
import Login2 from '../components/Login/Login2.vue'
import New from '../components/New/New.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/New',
        name: 'New',
        component: New
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Login2',
        component: Login2
    },

]
const router = new VueRouter({
    routes
})
export default router
