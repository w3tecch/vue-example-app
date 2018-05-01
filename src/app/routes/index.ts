import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/app/pages/Home.vue'),
    meta: {
      requiresAuth: false,
      guest: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/app/pages/About.vue'),
    meta: {
      requiresAuth: false,
      guest: false,
    },
  },
];
