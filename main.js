var path = require('path');
var mainPath = path.dirname(process.mainModule.filename);
if (process.env.NODE_APP_PATH) {
  mainPath = process.env.NODE_APP_PATH;
}
var cfg = require(mainPath + '/config/settings.json');
var merge = require('merge-recursive');

var settings = cfg.default;
var ENV = process.env.NODE_ENV || 'development';

try {
  settings = merge.recursive(settings, cfg[ENV]);
} catch(e) {
  // No env detected. Issuing a warning.
  console.error('Environment specific settings not found: %s', ENV);
}

module.exports = settings;