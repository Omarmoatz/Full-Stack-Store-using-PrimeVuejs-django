import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/products/ProductsView.vue'
import ProductCreateView from '../views/products/ProductCreateView.vue'
import ProductUpdateView from '../views/products/ProductUpdateView.vue'
import LoginView from '@/views/users/LoginView.vue'
import RegisterView from '@/views/users/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Products',
      component: ProductView,
    },
    {
      path: '/:productId',
      name: 'ProductDetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/products/ProductDetailsView.vue'),
    },
    {
      path: '/new',
      name: 'ProductCreate',
      component: ProductCreateView
    },
    {
      path: '/:productId/update',
      name: 'ProductUpdate',
      component: ProductUpdateView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {hideNavbar:true}
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {hideNavbar:true}
    },
  ],
})

export default router
