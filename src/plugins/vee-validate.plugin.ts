/* ============
 * VeeValidate
 * ============
 *
 * Simple Vuejs Input Validation.
 *
 * https://vee-validate.logaretm.com/
 */

import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import de from 'vee-validate/dist/locale/de';
import en from 'vee-validate/dist/locale/en';

import { i18n } from '@/plugins/i18n.plugin';

Vue.use(VeeValidate, {
  dictionary: { en, de },
  locale: i18n.locale,
});

Validator.localize(i18n.locale);
