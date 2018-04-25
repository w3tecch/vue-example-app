/* ============
 * Noty
 * ============
 *
 * Notification libary.
 *
 * https://ned.im/noty/#/
 */

import Vue from 'vue';
import { PluginObject, PluginFunction } from 'vue';

import Noty from 'noty';

import { i18n } from '@/plugins/i18n.plugin';

export const NotyPlugin: PluginObject<any> = {
  install(VueInstance, options: { i18n: any }): void {

    const createNoty = (text: string, type: any = 'alert') => {
      return new Noty({
        type,
        text,
        theme: 'relax',
        timeout: 3000,
        progressBar: true,
      }).show();
    };

    VueInstance.prototype.$noty = {
      alert: (translationKey: string) => createNoty(options.i18n.t(translationKey), 'alert'),
      success: (translationKey: string) => createNoty(options.i18n.t(translationKey), 'success'),
      warning: (translationKey: string) => createNoty(options.i18n.t(translationKey), 'warning'),
      error: (translationKey: string) => createNoty(options.i18n.t(translationKey), 'error'),
      info: (translationKey: string) => createNoty(options.i18n.t(translationKey), 'info'),
    };

  },
};

Vue.use(NotyPlugin, { i18n });
