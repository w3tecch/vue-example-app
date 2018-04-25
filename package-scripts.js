/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */
module.exports = {
  scripts: {
    default: 'build',
    serve: './node_modules/.bin/vue-cli-service serve --open',
    build: './node_modules/.bin/vue-cli-service build',
    test: './node_modules/.bin/vue-cli-service test',
    e2e: './node_modules/.bin/vue-cli-service e2e',
    lint: './node_modules/.bin/vue-cli-service lint'
  }
};
