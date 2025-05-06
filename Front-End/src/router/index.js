import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductsView.vue'

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
      component: () => import('../views/ProductDetailsView.vue'),
    },
    {
      path: '/add',
      name: 'ProductCreate',
      component: ""
    }
  ],
})

export default router
