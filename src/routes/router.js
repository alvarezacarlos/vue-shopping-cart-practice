import { createRouter, createWebHistory } from 'vue-router'

import Products from '@/pages/Products.vue'
import Cart from '@/pages/Cart.vue'
import Admin from '@/pages/Admin.vue'

const appRoutes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/admin',
        component: Admin
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes
})


export default router