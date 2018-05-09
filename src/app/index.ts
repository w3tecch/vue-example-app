/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 * The order is important!
 */

import '@/app/plugins/bootstrap.plugin';
import '@/app/plugins/fontawesome.plugin';
import '@/app/plugins/logger.plugin';
import '@/app/plugins/vuex.plugin';
import '@/app/plugins/axios.plugin';
import '@/app/plugins/noty.plugin';
import '@/app/plugins/vee-validate.plugin';
import { i18n } from '@/app/plugins/i18n.plugin';
import { router } from '@/app/plugins/vue-router.plugin';

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Sass is used for this boilerplate.
 *
 * https://sass-lang.com/
 */

import '@/styles/main.scss';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from '@/app/App.vue';
import { store } from '@/app/store/index';
import { appConfig } from '@/config/app.config';

Vue.config.productionTip = appConfig.env !== 'Production';

// TODO: Dispatch main action during the bootstrap process
// store.dispatch(MetaDataActions.LoadAPIInfo);
// store.dispatch(AuthActions.CheckAuth);

new Vue({

  /**
   * The localization plugin.
   */
  i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: (h) => h(App),
})
  /**
   * Bind the Vue instance to the HTML.
   */
  .$mount('#app');

const log = Vue.$createLogger('main');
log.info(`The environment is ${appConfig.env}.`);
log.info(`The language is set to ${i18n.locale}.`);
