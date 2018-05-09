
const { ifWindows } = require('nps-utils');

/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */
module.exports = {
  scripts: {
    default: 'build',
    serve: 'vue-cli-service serve --open',
    build: 'vue-cli-service build',
    test: 'vue-cli-service test',
    e2e: 'vue-cli-service e2e',
    lint: 'vue-cli-service lint'
  }
};
