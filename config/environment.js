var _ = require('lodash');

var localEnvVars = {
  TITLE:      'propel_app',
  SAFE_TITLE: 'propel_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
