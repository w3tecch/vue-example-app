import Vue from 'vue';
import { PluginObject, PluginFunction } from 'vue';

const EventBus = new Vue();

export const EventBusPlugin: PluginObject<any> = {
  install(VueInstance): void {
    VueInstance.prototype.$eventBus = {
      get: () => EventBus,
    };
  },
};
