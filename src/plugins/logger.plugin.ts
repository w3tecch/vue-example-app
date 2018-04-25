/* ============
 * Logger
 * ============
 *
 * Lightweight, unobtrusive, configurable JavaScript logger.
 *
 * https://github.com/jonnyreeves/js-logger
 */

import Vue from 'vue';
import { PluginObject, PluginFunction } from 'vue';

import * as JSLogger from 'js-logger';

import { appConfig } from '@/config/app.config';

const LogLevel = appConfig.logLevel;
JSLogger.setLevel((JSLogger as any)[LogLevel]);
JSLogger.useDefaults();

export const Logger: PluginObject<any> = {
  install(VueInstance, options): void {

    VueInstance.$createLogger = (channelOrClass: string | any) => {
      return JSLogger.get(channelOrClass);
    };

    VueInstance.prototype.$createLogger = (channelOrClass: string | any) => {
      return JSLogger.get(channelOrClass);
    };

  },
};

Vue.use(Logger);
