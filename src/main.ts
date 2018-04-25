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

import '@/plugins/bootstrap.plugin';
import '@/plugins/bluebird.plugin';
import '@/plugins/fontawesome.plugin';
import '@/plugins/logger.plugin';
import '@/plugins/vuex.plugin';
import '@/plugins/axios.plugin';
import '@/plugins/noty.plugin';
import '@/plugins/vee-validate.plugin';
import { i18n } from '@/plugins/i18n.plugin';
import { router } from '@/plugins/vue-router.plugin';

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

import App from '@/App.vue';
import { store } from '@/store/index';
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
