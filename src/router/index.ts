import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from "@/stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/Welcome.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresGuest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { requiresGuest: true },
    },
    // {
    //   path: '/hello-world',
    //   name: 'hello-world',
    //   component: () => import('../views/HelloWorld.vue')
    // },
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); 
  
  if (to.meta.requiresGuest) {
    if (!authStore.isGuest) { 
      next({ name: 'home' }); 
    } else {
      next(); 
    }
  } else if (to.meta.requiresAuth) {
    if (authStore.isGuest) { 
      next({ name: 'login' }); 
    } else {
      next(); 
    }
  } else {
    next();
  }
});


export default router;
