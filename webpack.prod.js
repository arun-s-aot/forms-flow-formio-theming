const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'formsflowFormioTheme.min.js';
module.exports = config;
