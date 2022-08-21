import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './../App.vue'


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {path: '/', component: HomePage},
    ]
})

export default router