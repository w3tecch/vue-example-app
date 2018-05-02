
const { ifWindows } = require('nps-utils');

/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */
module.exports = {
  scripts: {
    default: 'build',
    serve: ifWindows(
      '.\\node_modules\\.bin\\vue-cli-service serve --open',
      './node_modules/.bin/vue-cli-service serve --open'
    ),
    build: ifWindows(
      '.\\node_modules\\.bin\\vue-cli-service build',
      './node_modules/.bin/vue-cli-service build'
    ),
    test: ifWindows(
      '.\\node_modules\\.bin\\vue-cli-service test',
      './node_modules/.bin/vue-cli-service test'
    ),
    e2e: ifWindows(
      '.\\node_modules\\.bin\\vue-cli-service e2e',
      './node_modules/.bin/vue-cli-service e2e',
    ),
    lint: ifWindows(
      '.\\node_modules\\.bin\\vue-cli-service lint',
      './node_modules/.bin/vue-cli-service lint'
    )
  }
};
