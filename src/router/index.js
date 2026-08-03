import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/contactanos',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/personalizar',
      name: 'builder',
      component: () => import('../views/CakeBuilderView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
})

export default router
