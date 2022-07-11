import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashLayout from '../layouts/DashLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },

  // apply layout to all the children 
  {
    path: '/',
    name: 'index',
    meta: { title: 'Home' },
    component: DashLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: 'Home', icon: 'icon-icon-test' },
        component: () => import('../views/Welcome.vue'),
      },
      {
        path: '/chart',
        name: 'chart',
        meta: { title: 'Chart', icon: 'icon-antdesign' },
        component: () => import('../views/Chart.vue'),
      },
      {
        path: '/user',
        name: 'user',
        meta: { title: 'user', icon: 'icon-tuijian', flat: true },
        component: () => import('../views/UserInfo.vue'),
      },

      {
        path: '/404',
        name: 'exception',
        component: () => import('../views/exception/404.vue'),
        meta: { title: 'menu.exception.title', icon: 'bx-analyse' },
      },
      //  catch url not found and redirect 404
      {
        path: '/:catchAll(.*)',
        redirect: "/404"
      }

    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router guard if not login(token) redirect to login view
router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("ACCESS_TOKEN")
  if (to.path == '/login' || to.path == '/404') {
    next()
    return;
  }
  if (!access_token) {
    next("/login")
  }
  else {
    next()
  }
})

export default router
