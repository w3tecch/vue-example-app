/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/app/routes';
// import { store } from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
});

// TODO: Configure router middleware
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((m) => m.meta.auth) && !store.state.auth.isAuthenticated) {
//     /*
//      * If the user is not authenticated and visits
//      * a page that requires authentication, redirect to the login page
//      */
//     next({
//       name: 'auth.login',
//     });
//   } else if (to.matched.some((m) => m.meta.guest) && store.state.auth.isAuthenticated) {
//     /*
//      * If the user is authenticated and visits
//      * an guest page, redirect to the dashboard page
//      */
//     next({
//       name: 'home',
//     });
//   } else {
//     next();
//   }
// });
