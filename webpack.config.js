// NOTE:
// this file is only read by the IDE so that it can understand
// how to import packages with absolute path
// https://stackoverflow.com/a/45214138/974107
const path = require('path')

const config = {}

config.resolve = {
  modules: [path.resolve(__dirname, './src'), 'node_modules'],
}

module.exports = config
