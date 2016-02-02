var config = require('./webpack.config.base.js');
config.entry = {};
config.entry.localDev = './main.jsx';

module.exports = config;
