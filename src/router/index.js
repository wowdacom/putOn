import { createWebHistory, createRouter } from 'vue-router'
import Home from "/@/views/Home.vue"
import About from "/@/views/Memo.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/memo",
        name: "memo",
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;