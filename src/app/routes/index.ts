import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/app/pages/Home/Home'),
    meta: {
      requiresAuth: false,
      guest: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/app/pages/About/About'),
    meta: {
      requiresAuth: false,
      guest: false,
    },
  },
];
