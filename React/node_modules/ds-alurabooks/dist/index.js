
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ds-alurabooks.cjs.production.min.js')
} else {
  module.exports = require('./ds-alurabooks.cjs.development.js')
}
