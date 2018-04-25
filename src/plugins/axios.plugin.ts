/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue, { PluginFunction, PluginObject } from 'vue';

import Axios from 'axios';

import { appConfig } from '@/config/app.config';
import { store } from '@/store';

Axios.defaults.baseURL = appConfig.apiPath;
// Axios.defaults.headers.common.Accept = 'application/json';
// Axios.defaults.headers.common.ContentType = 'application/json';
Axios.interceptors.response.use(
  (response) => response,
  (error) => {

    // TODO: Handle network errors
    // if (!error.response) {
    //   store.dispatch(MetaDataActions.SetServerUnavailable);
    // }

    // TODO: Handle 401 responses
    // if (error.response && error.response.status === 401 && store.state.auth.isAuthenticated) {
    //   store.dispatch(AuthActions.SignOutUser);
    // }

    return Promise.reject(error);
  }
);

export const Http: PluginObject<any> = {
  install(VueInstance, options): void {
    VueInstance.$http = Axios;
    VueInstance.prototype.$http = Axios;
  },
};

Vue.use(Http);
