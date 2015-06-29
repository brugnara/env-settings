var currentFile = require.resolve('./');
// extract main dir
var arTmp = currentFile.replace(/\\/g, '/').split('/');
var tmp = arTmp.slice(0, arTmp.indexOf('node_modules'));
var cfg = require(tmp.join('/') + '/config/settings.json');
var merge = require('merge-recursive');

var settings = cfg.default;
var ENV = process.env.NODE_ENV || 'development';

try {
  settings = merge.recursive(settings, cfg[ENV]);
} catch(e) {
  // No env detected. Issuing a warning.
  console.error('Environment specific settings not found: %s', ENV);
}

settings.env = settings.environment = settings.ENV = ENV;

module.exports = settings;
