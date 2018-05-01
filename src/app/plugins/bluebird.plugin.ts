/* ============
 * BlueBird
 * ============
 *
 * Promise pollyfill
 *
 * http://bluebirdjs.com/docs/getting-started.html
 */

import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });
