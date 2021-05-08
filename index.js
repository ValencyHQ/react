'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react.cjs.production.js')
} else {
  module.exports = require('./react.cjs.development.js')
}
