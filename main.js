var currentFile = require.resolve('./');
// extract main dir
var arTmp = currentFile.split('/');
tmp = arTmp.slice(0, arTmp.indexOf('node_modules'));
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

module.exports = settings;
