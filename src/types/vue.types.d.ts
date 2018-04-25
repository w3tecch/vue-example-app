import Vue from 'vue';

import Noty from 'noty';
import { AxiosInstance } from "axios";


declare module 'vue/types/vue' {

  interface VueConstructor {
    $createLogger: (channelOrClass: string | any) => ILogger;
    $http: AxiosInstance;
  }

  interface INoty {
    alert: (translationKey: string) => Noty;
    success: (translationKey: string) => Noty;
    warning: (translationKey: string) => Noty;
    error: (translationKey: string) => Noty;
    info: (translationKey: string) => Noty;
  }

  interface Vue {
    $createLogger: (channelOrClass: string | any) => ILogger;
    $noty: INoty;
    $http: AxiosInstance;
  }
}
