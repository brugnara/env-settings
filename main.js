var cfg = require('../config/settings.json');
var merge = require('merge');

var settings = merge(settings, cfg.default);
var ENV = process.env.NODE_ENV || 'development';

try {
  settings = merge(settings, cfg[ENV]);
} catch(e) {
  // No env detected. Issuing a warning.
  console.error('Environment specific settings not found: %s', ENV);
}

module.exports = settings;